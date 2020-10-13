<template>
  <div>
  <b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
import { getTableList } from '@/api/serviceDomi'

export default {
    data() {
      return {
        isBusy: false,
        // Note `isActive` is left out and will not appear in the rendered table
        //fields: ['first_name', 'last_name', 'age'],
        fields: [
            //'CASE_NAME',
            {key: 'ID', label: '序號'},
            {key: 'CASE_NAME', label: '社區名'},
            {key: 'ADDRESS', label: '地址'},
            {key: 'FLOOR', label: '樓層'},
            {key: 'PATTERN', label: '格局'},
            {
                // A virtual column with custom formatter
                key: 'birthYear',
                label: 'Calculated Birth Year',
                formatter: (value, key, item) => {
                    //return new Date().getFullYear()
                    return item.NAME
                }
            }
        ],
        items:[],
        // items: [
        //   { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        // ]
      }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData() {
            //this.listLoading = true
            this.isBusy = true
            let para = {
                tableName: "cases",
                //filter: "NAME like '!" + this.filters.name + "!'",
                skip: 1,
                top: 1000,
                orderby: ""
                // filter:{
                //     manno: this.filters.manno,
                //     brushdate1: this.filters.brushdate1,
                //     brushdate2: this.filters.brushdate2
                // }
            };
            getTableList(para).then( res => {
                console.log(res.data.rows)
                this.items = res.data.rows
                this.isBusy = false
            })
        }
    }
  }
</script>