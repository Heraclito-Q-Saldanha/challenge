<script setup lang="ts">
    import Button from '@/volt/Button.vue';
    import NewTaskModal from '@/components/NewTaskModal.vue';
    import DataTable from '@/volt/DataTable.vue';
    import Column from 'primevue/column';
    import { ref } from 'vue';
    
    interface Task {
        title: string,
        description: string,
        priority: string,
        status: string,
        assignedTo: string,
        createdAt: string,
        dueDate: string,
        actions: string,
    }

    const newTask = ref(false);
    const tasks: Task[] = [{
        title: "asdasd",
        description: "asd",
        priority: "asd",
        status: "asd",
        assignedTo: "asd",
        createdAt: "asd",
        dueDate: "asd",
        actions: "asd"
    }];
</script>

<template>
    <NewTaskModal v-if="newTask" :onClose="() => newTask = false" />
    <div class="flex flex-col w-full h-full p-8">
        <div class="flex flex-col w-full h-full rounded-2xl gap-4">
            <div class="flex flex-row w-full justify-end">
                 <div class="absolute left-1/2 transform -translate-x-1/2">
                    <h1 class="font-semibold">Task Management</h1>
                </div>
                <Button icon="pi pi-plus" v-on:click="newTask = !newTask" label="Add Task" variant="text" :pt="{root: 'flex gap-1 items-center hover:cursor-pointer',label: 'dark:text-white text-black'}"></Button>
            </div>
            <DataTable :value="tasks" pt:table="min-w-200">
                <Column field="title" header="Title"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="priority" header="Priority"></Column>
                <Column field="status" header="Status"></Column>
                <Column field="assignedTo" header="Assigned To"></Column>
                <Column field="createdAt" header="Created At"></Column>
                <Column field="dueDate" header="Due Date"></Column>
                <Column field="actions" header="Actions"></Column>
            </DataTable>
        </div>
    </div>
</template>

