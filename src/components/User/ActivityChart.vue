<template>
        <div class="chart" ref="chart" @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="mouseMove" @mouseleave="mouseLeave">
            <div :id="'area-'+id" ref="area"></div>
            <div class="axis">
                <div class="label" v-for="(day, i) in activities" :key="i">
                    <span class="label-top">{{ prettyDate(day.day) }}</span>
                    <span class="label-bottom">{{ day.day.weekday }}</span>
                </div>
            </div>
        </div>
    
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import * as d3 from "d3";

import { ActivityDay } from '@/interfaces/activity'
import store from '@/store/store'
import { prettyDate } from '@/store/helpers';


export default defineComponent({
    props: {
        activities: {
            type: Array as PropType<ActivityDay[]>,
            required: true
        },
        row: {
            type: String,
            required: true
        },
        id: String,
        height: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            state: store.state,
            prettyDate,

            margin: { top: 50, bottom: 10 },

            dragging: false,
            startX: 0,
            scrollLeft: 0
        }
    },

    watch: {
        activities: function() {
            this.clean();
            this.render();
        }
    },

    mounted(): void {
        this.render();
    },
    

    methods: {
        clean(): void {
            const node = (this.$refs.area as HTMLDivElement)
            while(node.lastChild) {
                node.removeChild(node.lastChild);
            }
        },
        render(): void {
            console.dir(this.activities);

            const columnWidth = 100;
            const width = this.activities.length * columnWidth;

            const svg = d3.select('#area-'+this.id)
            .append("svg")
            .attr("width", width)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", `translate(0, ${this.margin.top})`);

            // x axis (human-readable day names)
            const x = d3.scaleBand()
            .domain(this.activities.map(x => prettyDate(x.day)))
            .range([0, width])

            const countArray = this.activities.map((x: any) => x[this.row]);
            // y axis (episode/chapter count)
            const y = d3.scaleLinear()
            .domain([d3.min(countArray), d3.max(countArray) as number])
            .range([this.height, 0])

            const line = d3.line<ActivityDay>()
            .x((d: ActivityDay) => {
                return x(prettyDate(d.day)) as number + columnWidth/2;
            })
            .y((d: any) => y(d[this.row]))
            .curve(d3.curveMonotoneX)

            // AREA
            svg.append("path")
            .datum(this.activities)
            .attr("fill", "none")
            .attr("stroke", "#188cc6") // TODO move to CSS
            .attr("stroke-width", 4)
            .attr("d", line)

            // EPISODE COUNT LABELS
            svg.selectAll("labels")
            .data(this.activities)
            .join("text")
            .text((d: any) => d[this.row])
            .attr("class", "chart-label")
            .attr("text-anchor", "middle")
            .attr("font-weight", "500")
            .attr("x", d => x(prettyDate(d.day)) as number + columnWidth/2)
            .attr("y", (d: any) => y(d[this.row]) - 15);

            // POINTS
            svg.selectAll("circles")
            .data(this.activities)
            .join("circle")
            .attr("fill", "#34bbff") // TODO move to CSS
            .attr("stroke", "none")
            .attr("fill-opacity", "0.7")
            .attr("r", 5)
            .attr("cx", d => x(prettyDate(d.day)) as number + columnWidth/2)
            .attr("cy", (d: any) => y(d[this.row]));
        },

        // Chart scrolling event handlers
        mouseDown(e: MouseEvent) {
            this.dragging = true;
            this.startX = e.pageX - (this.$refs.chart as HTMLDivElement).offsetLeft;
            this.scrollLeft = (this.$refs.chart as HTMLDivElement).scrollLeft;
        },

        mouseUp() {
            this.dragging = false;
        },

        mouseMove(e: MouseEvent) {
            if(!this.dragging) return;
            const x = e.pageX - (this.$refs.chart as HTMLDivElement).offsetLeft;
            const walk = (x - this.startX) * 1.5;
            (this.$refs.chart as HTMLDivElement).scrollLeft = this.scrollLeft - walk;
        },

        mouseLeave() {
            this.dragging = false;
        }
    }
})
</script>

<style lang="scss" scoped>
.chart {
    overflow-x: scroll;
    white-space: nowrap;
    user-select: none;

    cursor: grab;

    &:active {
        cursor: grabbing;
    }
}

.axis {
    padding-right: 10px;
    background: var(--color-background-darker);
    border-radius: var(--radius);
}

.label {
    background: var(--color-background-darker);
    padding: 10px 0; 

    display: inline-flex;
    flex-direction: column;

    width: 100px;
    text-align: center;
}

.label-top {
    font-weight: 500;
    font-size: 0.95em;
}

.label-bottom {
    font-size: 0.76em;
    color: var(--color-text-secondary);
}
</style>
<!-- SVG STYLING-->

<style lang="scss">
svg .chart-label {
    fill: var(--color-text);
}
</style>