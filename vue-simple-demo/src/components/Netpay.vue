<template>
  <div class="hello">
    <h1>{{ headMsg }}</h1>
    <ul>
      <li>{{ targetSysName }} 交易总笔数 {{ targetSysNum }} 笔</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Netpay',
  props: {
      headMsg: String,
      targetSysName: String,
      targetSysNum: Number
  }
}
</script>
