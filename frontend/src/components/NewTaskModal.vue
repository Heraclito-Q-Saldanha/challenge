<script setup lang="ts">
    import InputText from "@/volt/InputText.vue";
    import Button from "@/volt/Button.vue";
    import DatePicker from "@/volt/DatePicker.vue";
    import Select from '@/volt/Select.vue';
    import Textarea from '@/volt/Textarea.vue';
    import InputNumber from "@/volt/InputNumber.vue";
    import AutoComplete from '@/volt/AutoComplete.vue';
    import { defineProps, ref } from 'vue';

    const props = defineProps<{
        onClose: () => void,
    }>();

    const priorities = [
        { display: 'Low', value: 'LOW' },
        { display: 'Medium', value: 'MEDIUM' },
        { display: 'High', value: 'HIGH' }
    ];

    const status = [
        { display: 'To Do', value: 'TODO' },
        { display: 'In Progress', value: 'IN_PROGRESS' },
        { display: 'Done', value: 'DONE' }
    ];

    const tags = ref([]);
</script>
<template>
    <div class="fixed top-0 left-0 z-10 flex w-screen h-screen items-center justify-center bg-current/20">
        <div class="flex flex-col w-full h-full md:w-96 md:h-min bg-slate-100 rounded-lg p-6 gap-4 dark:bg-zinc-950">
            <div class="flex flex-row w-full justify-between">
                <h1 class="font-semibold">Create New Task</h1>
                <Button icon="pi pi-times" variant="text" :onclick="props.onClose" />
            </div>
            <form class="flex flex-col w-full">
                <div class="flex flex-col w-full">
                    <label>Title</label>
                    <InputText placeholder="Task title" />
                </div>
                <div class="flex flex-col w-full">
                    <label>Description</label>
                    <Textarea placeholder="Task description" />
                </div>
                <div class="flex flex-col w-full">
                    <label>Due Date</label>
                    <DatePicker showIcon iconDisplay="input" />
                </div>    
                <div class="flex flex-col w-full">
                    <label>Estimated Hours</label>
                    <InputNumber />
                </div>
                <div class="flex flex-col w-full">
                    <label>Priority</label>
                    <Select :options="priorities" optionLabel="display"></Select>
                </div>
                <div class="flex flex-col w-full">
                    <label>Status</label>
                    <Select :options="status" optionLabel="display"></Select>
                </div>
                <div class="flex flex-col w-full">
                    <label>Assigned To</label>
                    <InputText placeholder="Signature"></InputText>
                </div>
                <div class="flex flex-col w-full">
                    <label>Tags</label>
                    <AutoComplete multiple fluid v-model="tags" :typeahead="false" />
                </div>
                <div class="flex flex-col w-full mt-2">
                    <Button label="Save" type="submit" />
                </div>
            </form>
        </div>
    </div>
</template>