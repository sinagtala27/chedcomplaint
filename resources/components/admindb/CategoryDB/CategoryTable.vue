<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead
                  class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr >
                    <th scope="col" class="px-6 py-4">ID</th>
                    <th scope="col" class="px-6 py-4">Title</th>
                   
                  </tr>
                </thead>
                <tbody v-if="categories.length > 0">
                  <tr v-for="(category,key) in categories" :key="key"
                    class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">{{category.id}}</td>
                    <td class="whitespace-nowrap px-6 py-4">{{category.title}}</td>
                    <td>

                    </td>
                  </tr>   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name:"categories",
    data(){
        return {
            categories:[]
        }
    },
    mounted(){
        this.getCategories()
    },
    methods:{
        async getCategories(){
            await this.axios.get('/api/category').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        deleteCategory(id){
            if(confirm("Are you sure to delete this category ?")){
                this.axios.delete(`/api/category/${id}`).then(response=>{
                    this.getCategories()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>