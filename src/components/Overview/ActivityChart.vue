<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import type { Day } from '../../stores/helpers/activities'
import * as d3 from 'd3'
import { displayDate, weekdays } from '../../lib/days'

const props = defineProps<{
  days: Map<number, Day>
  property: 'totalEpisodes' | 'totalChapters'
  name: string
  height?: number
}>()
const chart = ref<HTMLDivElement | null>(null)
const container = ref<HTMLDivElement | null>(null)

const dates = computed(() => {
  return Array.from(props.days.keys()).map(x => new Date(x))
})

onMounted(() => render())
onUnmounted(() => cleanup())

watch(
  () => props.days,
  () => {
    cleanup()
    render()
  }
)

const render = () => {
  const columnWidth = 100
  const width = props.days.size * columnWidth
  const height = props.height || 150

  const margin = {
    top: 50,
    bottom: 10,
  }

  const svg = d3
    .select('#area-' + props.name)
    .append('svg')
    .attr('width', width)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(0, ${margin.top})`)

  const countArray = Array.from(props.days.values()).map(x => x[props.property])

  const keys = Array.from(props.days.keys())

  const x = d3
    .scaleBand()
    .domain(Array.from(keys).map(x => x.toString()))
    .range([0, width])

  const y = d3
    .scaleLinear()
    .domain([d3.min(countArray) || 0, d3.max(countArray) || 0])
    .range([height, 0])

  const line = d3
    .line<[number, Day]>()
    .x(d => {
      return (x(d[0].toString()) || 0) + columnWidth / 2
    })
    .y(d => y(d[1][props.property]))
    .curve(d3.curveMonotoneX)

  // Area
  svg
    .append('path')
    .datum(props.days)
    .attr('fill', 'none')
    .attr('stroke', '#188cc6')
    .attr('stroke-width', 4)
    .attr('d', line)

  // Episode count labels
  svg
    .selectAll('labels')
    .data(props.days)
    .join('text')
    .text(d => d[1][props.property])
    .attr('class', 'chart-label')
    .attr('text-anchor', 'middle')
    .attr('font-weight', 500)
    .attr('x', d => (x(d[0].toString()) || 0) + columnWidth / 2)
    .attr('y', d => y(d[1][props.property]) - 15)

  // Points
  svg
    .selectAll('circles')
    .data(props.days)
    .join('circle')
    .attr('class', 'chart-circle')
    .attr('stroke', 'none')
    .attr('fill-opacity', '0.7')
    .attr('r', 5)
    .attr('cx', d => (x(d[0].toString()) || 0) + columnWidth / 2)
    .attr('cy', d => y(d[1][props.property]))
}

const cleanup = () => {
  while (chart.value?.lastChild) {
    chart.value.removeChild(chart.value.lastChild)
  }
}

const state = reactive({
  dragging: false,
  startX: 0,
  scrollLeft: 0,
})

const mouseDown = (e: MouseEvent) => {
  state.dragging = true
  state.startX = e.pageX - (container.value?.offsetLeft || 0)
  state.scrollLeft = container.value?.scrollLeft || 0
}

const mouseUp = () => {
  state.dragging = false
}

const mouseMove = (e: MouseEvent) => {
  if (!state.dragging) return

  const x = e.pageX - (container.value?.offsetLeft || 0)
  const walk = (x - state.startX) * 1.5
  if (container.value) container.value.scrollLeft = state.scrollLeft - walk
}
</script>

<template>
  <div class="chart" ref="container">
    <div
      :id="`area-${name}`"
      ref="chart"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mousemove="mouseMove"
      @mouseleave="mouseUp"
    ></div>
    <div class="axis">
      <div class="label" v-for="(timestamp, i) in dates" :key="i">
        <span class="label-top">{{ displayDate(timestamp) }}</span>
        <span class="label-bottom">{{ weekdays[timestamp.getDay()] }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chart {
  overflow-x: scroll;
  white-space: nowrap;
  user-select: none;

  cursor: grab;
  scrollbar-width: none;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.chart-label {
  fill: var(--color-text);
}

.chart-circle {
  fill: #34bbff;
}

.axis {
  background: var(--color-background-secondary);
}

.label {
  background: var(--color-background-secondary);
  padding: 0.5rem 0;

  display: inline-flex;
  flex-direction: column;
  width: 100px;
  text-align: center;
}

.label-top {
  font-size: 0.9rem;
  font-weight: 500;
}

.label-bottom {
  font-size: 0.76em;
  color: var(--color-text-secondary);
}
</style>
