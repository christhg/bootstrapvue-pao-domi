<template>
  <div class="container33">
    <div class="row22">
      <div class="col11">
      <b-card-group columns>
          <!-- <b-card 
          header="大官邸" 
          img-src="../assets/pic1.png"
          style="max-width: 15rem;"
          class="mb-2"
        >
            <b-list-group>
              <b-list-group-item href="#">Cras justo odio</b-list-group-item>
              <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <p class="card-text mt-2">
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
              consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
              mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
            </p>
          </b-card>

          <b-card 
          header="願景之旅" 
          img-src="../assets/pic2.png"
          style="max-width: 15rem;"
          class="mb-2"
        >
            <b-list-group flush>
              <b-list-group-item href="#">Cras justo odio</b-list-group-item>
              <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-card-body>

              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
              consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
              mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
            </b-card-body>
          </b-card> -->
          <!-- style="max-width: 20rem;" -->
          <b-card  v-for="item in activeItems" :key="item.ID"
          :header="item.CASE_NAME"

          class="mb-3"
          >
              <b-img fluid :src="require('../assets/pic'+item.ID+'.png')" alt="No image" />
              <b-card-body>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                consequat non elit enim exercitation cillum aliqua consequat id aliqua.
              </b-card-body>
              <b-list-group flush>
                <b-list-group-item href="#">樓層：{{item.FLOOR}}</b-list-group-item>
                <b-list-group-item href="#">格局：{{item.PATTERN}}</b-list-group-item>
                <b-list-group-item href="#">地址：{{item.ADDRESS}}</b-list-group-item>
              </b-list-group>
          </b-card>
      </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getTableList } from '@/api/serviceDomi'

export default {
  data(){
    return {
      isBusy: false,
      items: [
        { id: '1', name: '選項 1', pic: require('../assets/pic1.png') },
        { id: '2', name: '選項 2', pic: require('../assets/pic2.png') },
        { id: '3', name: '選項 3', pic: require('../assets/pic3.png') },
      ],
    }
  },
  created(){
      this.fetchData()
  },
  computed: {
    activeItems: function() {
      return this.items.filter(function(item){
        return item.ID <= 10
      })
    }
  },
  methods:{
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
                //console.log(res.data.rows)
                // let payload = res.data.rows
                // payload.forEach(element => {
                //   element['PIC'] = require("+element['PIC']+")
                // });
                // Object.keys(payload)
                // .filter(key => key.includes('PIC'))
                // .map(key=> `${key}=require('${payload[key]}')` )

                this.items = res.data.rows
                console.log(this.items)
                this.isBusy = false
            })
        } 
  }
}
</script>

<style scoped lang="css">
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 1140px;  /* 隨螢幕尺寸而變，當螢幕尺寸 ≥ 1200px 時是 1140px。 */
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col {
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
