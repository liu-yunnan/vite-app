<template>
  <div class="dialog">
    <header class="header">
      <div>dialog</div>
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""
        style="width: 1em; height: 1em; margin-right: 8px">
        <path fill="currentColor"
          d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
        </path>
      </svg>
    </header>
    <main class="main">
      Teleport <br />
      <br />
      通过to 属性 插入指定元素位置 to="body" 便可以将Teleport 内容传送到指定位置<br />
      <br />
      使用disabled 设置为 true则 to属性不生效 false 则生效<br />
    </main>
    <footer class="footer">
      <el-button size="small">取消</el-button>
      <el-button size="small" type="primary">确定</el-button>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.dialog {
  border-radius: 10px;
  width: 400px;
  height: 400px;
  background: rgba(32, 33, 32, 0.569);
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;
}

.header {
  display: flex;
  color: #CFD3DC;
  border-bottom: 1px solid #5c5c5e;
  padding: 10px;
  justify-content: space-between;
}

.main {
  flex: 1;
  color: #CFD3DC;
  padding: 10px;
}

.footer {
  border-top: 1px solid #636466;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>