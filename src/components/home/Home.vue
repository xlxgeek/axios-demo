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
          console.log(res)
            this.stationName = res.retData;
        })
    }
}
</script>
