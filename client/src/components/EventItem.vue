<template>
    <div class="event">
        <p>
            {{event.teamA.name + ' vs ' + event.teamB.name + ' ' + event.date}}
            <button @click="$emit('del-event',event._id)" class="del">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "EventItem",
    props: ["event"],
    
}
</script>

<style scoped>
    .event{
        background: #f4f4f4;
        padding: 20px;
        border-bottom: 1px #ccc dotted;
        text-align: center;
    }

    .body{
        color: black;
    }

    .del{
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>

