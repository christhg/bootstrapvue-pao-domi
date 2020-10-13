<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"  stacked='md'>
        <template v-slot:table-busy>
            <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
        </template>
    </b-table>
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
            {key: 'PARKING_SPACE', label: '車位'},
            {key: 'RENT_MONTH', label: '租金(月)'},
            {key: 'MANAGEMENT_FEE', label: '管理費(月)'},
            {key: 'RENT_MANAG_FEE', label: '總費用(月)'},
            // {
            //     // A virtual column with custom formatter
            //     key: 'birthYear',
            //     label: 'Calculated Birth Year',
            //     formatter: (value, key, item) => {
            //         //return new Date().getFullYear()
            //         return item.NAME
            //     }
            // }
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