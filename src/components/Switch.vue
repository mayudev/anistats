<template>
    <div>
        <div>
            <input type="checkbox" :checked="modelValue" @input="$emit('update:modelValue', $event.target.checked)" :id="name" class="switch-input" />
            <label :for="name" class="switch-label"><slot></slot></label>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        modelValue: Boolean,
        name: String
    },
    emits: ['update:modelValue']
})
export default class Switch extends Vue {
    modelValue!: boolean;
    name!: string;
}
</script>

<style lang="scss" scoped>
.switch-input {
    display: none;
}

.switch-label {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    padding: 16px 0 16px 44px;
}

.switch-label:before, .switch-label:after {
    content: "";
    position: absolute;
    margin: 0;
    outline: 0;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.2s ease;
}

.switch-label:before {
    left: 1px;
    width: 34px;
    height: 14px;
    background-color: #363e50;
    border-radius: 8px;
}

.switch-label:after {
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #1b2333;
    border-radius: 50%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}

.switch-input:checked + .switch-label:after {
    background-color: var(--color-text-blue);
    transform: translate(80%, -50%);
}
</style>