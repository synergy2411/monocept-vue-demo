<template>
    <div>
        <h1>Vue Resource Demo</h1>

        <table>
            <tr>
                <td>
                    Username :
                </td>
                <td>
                    <input type="text" v-model="user.name">
                </td>
            </tr>
            <tr>
                <td>
                    Email :
                </td>
                <td>
                    <input type="text" v-model="user.email">
                </td>
            </tr>
            <tr>
                <td>
                    <button @click.prevent="onSubmit">Submit</button>
                    <button @click.prevent="onFetch">Fetch</button>
                </td>
            </tr>
        </table>
        <hr>
        <ul>
            <li v-for="(u, i) in users" :key="i">
                {{ u.name }} - {{ u.email }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user : {
                name : "",
                email : ""
            },
            users : []
        }
    },
    methods: {
        onSubmit(){
            console.log(this.user);
            this.$http.post("userdatatwo.json", this.user)
                .then(response => {
                    console.log(response.json())
                }, err => console.log(err))
                .catch(err => console.log(err));
        },
        onFetch(){
            this.$http.get("userdata.json")
                .then(response => {
                    return response.json();
                })
                .then(resp => {
                    console.log(resp);
                    var resultArr = [];
                    for(let item in resp.data){
                        resultArr.push(resp.data[item]);
                    }
                    this.users = resultArr;
                })
                .catch(err => console.log(err));
        }
    },
}
</script>