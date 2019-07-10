<template>
    <div class="page-tab-container">
        <!--父面板-->
        <mt-tab-container class="page-tabbar-tab-container" v-model="active">
            <!--子面板-->
            <mt-tab-container-item id="tab1">
                <my :islogin="islogin"></my>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <found></found>
            </mt-tab-container-item">
            <mt-tab-container-item id="tab3">
                <friend></friend>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
                <videos></videos>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import found from './found'
import my from './my'
import friend from './friend'
import videos from './videos'
export default {
    data(){
        return {}
    },
    components:{
        "found":found,
        "my":my,
        "friend":friend,
        "videos":videos
    },
    props:{
      active:{default:""},
      islogin:{default:""},
    }
}
</script>
      