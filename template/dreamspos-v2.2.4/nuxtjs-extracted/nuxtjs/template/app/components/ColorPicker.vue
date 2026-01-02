<template>
    <div ref="pickerRoot" class="color-picker-root" v-bind="$attrs"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import Pickr from '@simonwep/pickr';
import '@simonwep/pickr/dist/themes/classic.min.css';

const props = defineProps({
    value: {
        type: String,
        default: '#3b7ddd',
    },
    format: {
        type: String,
        default: 'hex',
    },
    swatches: {
        type: Array,
        default: () => [],
    },
    theme: {
        type: String,
        default: 'classic',
    },
    useOpacity: {
        type: Boolean,
        default: true,
    },
    showComponents: {
        type: Object,
        default: () => ({
            preview: true,
            opacity: true,
            hue: true,
            interaction: {
                rgba: true,
                input: true,
                clear: true,
                save: true,
            },
        }),
    },
});

const emit = defineEmits(['change', 'format-change', 'ready']);

const pickerRoot = ref(null);
let pickrInstance = null;
let lastRepresentation = null;

const toPickrRepresentation = (format) => {
    if (!format) return null;
    return format.toUpperCase();
};

const normalizeFormat = (format) => {
    if (!format) return null;
    return format.toLowerCase();
};

lastRepresentation = normalizeFormat(null);

const formatColorValue = (color, representation) => {
    const format = normalizeFormat(representation) || normalizeFormat(props.format);
    switch (format) {
    case 'hex':
        return color.toHEXA().toString();
    case 'rgba':
    case 'rgb': {
        const rgba = color.toRGBA().toString(0);
        return format === 'rgb' ? rgba.replace('rgba', 'rgb').replace(/,\s?1\)$/i, ')') : rgba;
    }
    case 'hsla':
        return color.toHSLA().toString(1);
    case 'hsva':
        return color.toHSVA().toString(1);
    case 'cmyk':
        return color.toCMYK().toString();
    default:
        return color.toHEXA().toString();
    }
};

const getRepresentation = (instance) => {
    if (!instance || typeof instance.getColorRepresentation !== 'function') {
        return null;
    }
    return instance.getColorRepresentation();
};

const emitFormatIfChanged = (instance) => {
    const representation = normalizeFormat(getRepresentation(instance));
    if (representation && representation !== lastRepresentation) {
        lastRepresentation = representation;
        emit('format-change', representation);
    }
};

const createPickr = () => {
    if (!pickerRoot.value) {
        return;
    }

    pickrInstance = Pickr.create({
        el: pickerRoot.value,
        theme: props.theme,
        default: props.value,
        defaultRepresentation: toPickrRepresentation(props.format),
        swatches: props.swatches,
        components: props.showComponents,
    });

    lastRepresentation = normalizeFormat(props.format);

    pickrInstance
        .on('init', (instance) => {
            emit('ready', instance);
            emitFormatIfChanged(instance);
        })
        .on('change', (color, instance) => {
            const representation = getRepresentation(instance);
            const formattedValue = formatColorValue(color, representation);
            const rgbaValue = color.toRGBA().toString(0);
            emit('change', formattedValue, rgbaValue);
            emitFormatIfChanged(instance);
        });
};

onMounted(() => {
    createPickr();
});

onBeforeUnmount(() => {
    if (pickrInstance) {
        pickrInstance.destroyAndRemove();
        pickrInstance = null;
    }
});

watch(
    () => props.value,
    (newValue) => {
        if (pickrInstance && newValue) {
            const currentColor = pickrInstance.getColor()?.toRGBA().toString(0);
            if (currentColor !== newValue) {
                pickrInstance.setColor(newValue);
            }
        }
    }
);

watch(
    () => props.format,
    (newFormat) => {
        if (pickrInstance && newFormat) {
            pickrInstance.setColorRepresentation(toPickrRepresentation(newFormat));
            lastRepresentation = normalizeFormat(newFormat);
        }
    }
);
</script>

<style scoped>
.color-picker-root {
    line-height: 0;
}
</style>

