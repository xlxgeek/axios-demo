<template>
    <h1 class="home">
        {{stationName}}
    </h1>
</template>

<script>
import {getStation} from "../../api/index"

export default {
    data() {
        return{
            stationName: ""
        }
    },
    created() {
        getStation().then(res => {
            this.stationName = res.msg;
        })
    }
}
</script>
