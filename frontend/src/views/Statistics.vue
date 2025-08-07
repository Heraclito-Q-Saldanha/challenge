<script setup lang="ts">
    import { Chart } from 'chart.js';
    import {  onMounted, ref } from 'vue';

    const chart = ref<HTMLCanvasElement>();
    const high = [10, 20, 15, 30, 25, 40];
    const medium = [5, 15, 10, 20, 30, 35];
    const low = [8, 12, 18, 22, 28, 36];

    onMounted(() => {
       let _chartInstance = new Chart(chart.value!, {
            type: 'line',
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [
                    {
                        label: 'High Urgency',
                        data: high,
                        borderColor: 'red',
                        fill: false
                    },
                    {
                        label: 'Medium Urgency',
                        data: medium,
                        borderColor: 'orange',
                        fill: false
                    },
                    {
                        label: 'Low Urgency',
                        data: low,
                        borderColor: 'green',
                        fill: false
                    }
                ]
            },
        });
    });
</script>
<template>
    <div class="flex min-w-0 min-h-0 flex-col w-full h-full p-8 gap-8">
        <div class="flex flex-col w-full rounded-2xl gap-4">
            <div class="absolute left-1/2 transform -translate-x-1/2">
                <h1 class="font-semibold">Statistics</h1>
            </div>
        </div>
        <div class="flex flex-col w-full h-full items-center gap-4">
            <div class="flex w-full h-full items-center justify-center p-4 rounded-3xl ">
                <canvas class="flex p-2 rounded-3xl bg-slate-100 dark:bg-zinc-950 " ref="chart"></canvas>
            </div>
        </div>
    </div>
</template>