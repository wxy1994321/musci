<template>
  <div class="musci-right">
    <div class="content">
      <keep-alive exclude="detail,album,lyric,search,mv">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped>
.musci-right {
  flex: 1;
  background-color: #fff;
  overflow: auto;
  overflow-x: hidden;
}
.content {
  width: 88%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
