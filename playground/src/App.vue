<script setup lang="tsx">
let value = $ref('foo')
function onInput(e: any) {
  value = e.target?.value
}

export default () => (
  <>
    <input
      {value}
      {onInput}
    />
  </>
)
</script>
