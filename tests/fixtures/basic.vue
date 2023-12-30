<script setup lang="tsx">
let value = $ref('foo')
function onInput(e: any) {
  value = e.target?.value
}

defineRender(() => (
  <>
    <input
      {value}
      {onInput}
    />
  </>
))
</script>
