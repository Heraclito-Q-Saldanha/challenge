<script setup lang="ts">
    import { countTasksRequest } from '@/api/tasks';
    import { Chart } from 'chart.js';
    import { ref, watch } from 'vue';
    import { useQuery } from 'vue-query';
    import Loading from '@/components/Loading.vue';

    const { data, isLoading, isError, refetch } = useQuery('count', countTasksRequest);

    const chart = ref<HTMLCanvasElement>();
    const chartInstance = ref<Chart>();
    const high = [10, 20, 15, 30, 25, 40];
    const medium = [5, 15, 10, 20, 30, 35];
    const low = [8, 12, 18, 22, 28, 36];

    watch(chart, () => {
        chartInstance.value = new Chart(chart.value!, {
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
        chartInstance.value.render();
    });
</script>
<template>
    <div class="flex items-center min-w-0 min-h-0 flex-col w-full h-full p-8 gap-2">
        <div v-if="isLoading" class="flex items-center justify-center w-full h-full">
            <Loading class="flex w-64 h-64" />
        </div>
        <div v-else-if="isError" class="flex flex-col items-center justify-center w-full h-full">
            <p>Error loading data</p>
            <Button v-on:click="refetch">try again</Button>
        </div>
        <template v-else>
            <h1 class="font-semibold">Statistics</h1>
            <div class="flex items-center justify-center flex-row w-full gap-2">
                <div class="flex items-center justify-center w-32 h-20 rounded-2xl bg-slate-100 dark:bg-zinc-950 border-2 border-red-800">
                    <p class="font-semibold">{{ data["HIGH"] }}</p>
                </div>
                <div class="flex items-center justify-center w-32 h-20 rounded-2xl bg-slate-100 dark:bg-zinc-950 border-2 border-yellow-800">
                    <p class="font-semibold">{{ data["MEDIUM"] }}</p>
                </div>
                <div class="flex items-center justify-center w-32 h-20 rounded-2xl bg-slate-100 dark:bg-zinc-950 border-2 border-emerald-800">
                    <p class="font-semibold">{{ data["LOW"] }}</p>
                </div>
            </div>
            <div class="flex w-full h-full items-center">
                <canvas class="flex p-2 rounded-3xl bg-slate-100 dark:bg-zinc-950" ref="chart" />
            </div>
        </template>
    </div>
</template>