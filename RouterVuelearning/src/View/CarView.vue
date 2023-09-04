<script setup>
    import {useRoute, RouterView, useRouter} from "vue-router"
    import cars from "../data/cars.json"

    const route = useRoute()
    const router = useRouter()

    const carId = parseInt(route.params.id)
    const car = cars.find(c => c.id === parseInt(route.params.id))

    const showContact =() => {
        if(carId === 4) return;
        return router.push(`/cars/${carId}/contact`)
    }
    

</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="showContact">Seller's Contact</button>
        <RouterView/>
    </div>
    <div v-else>
        <h1>Car not Found</h1>
    </div>
</template>