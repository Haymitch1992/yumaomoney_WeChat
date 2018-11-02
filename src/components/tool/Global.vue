
<script>
  const earnsJson = [
    {
      'name': '8%',
      'value': '8'
    },
    {
      'name': '9%',
      'value': '9'
    },
    {
      'name': '10%',
      'value': '10'
    },
    {
      'name': '11%',
      'value': '11'
    },
    {
      'name': '12%',
      'value': '12'
    },
    {
      'name': '8%',
      'value': '008',
      'parent': '8'
    },
    {
      'name': '9%',
      'value': '009',
      'parent': '8'
    },
    {
      'name': '10%',
      'value': '010',
      'parent': '8'
    },
    {
      'name': '11%',
      'value': '011',
      'parent': '8'
    },
    {
      'name': '12%',
      'value': '012',
      'parent': '8'
    },
    {
      'name': '9%',
      'value': '009',
      'parent': '9'
    },
    {
      'name': '10%',
      'value': '010',
      'parent': '9'
    },
    {
      'name': '11%',
      'value': '011',
      'parent': '9'
    },
    {
      'name': '12%',
      'value': '012',
      'parent': '9'
    },
    {
      'name': '10%',
      'value': '010',
      'parent': '10'
    },
    {
      'name': '11%',
      'value': '011',
      'parent': '10'
    },
    {
      'name': '12%',
      'value': '012',
      'parent': '10'
    },
    {
      'name': '11%',
      'value': '011',
      'parent': '11'
    },
    {
      'name': '12%',
      'value': '012',
      'parent': '11'
    },
    {
      'name': '12%',
      'value': '012',
      'parent': '12'
    }
  ]
  const termJson = [
    {
      'name': '1月',
      'value': '1'
    },
    {
      'name': '2月',
      'value': '2'
    },
    {
      'name': '3月',
      'value': '3'
    },
    {
      'name': '4月',
      'value': '4'
    },
    {
      'name': '5月',
      'value': '5'
    },
    {
      'name': '6月',
      'value': '6'
    },
    {
      'name': '7月',
      'value': '7'
    },
    {
      'name': '8月',
      'value': '8'
    },
    {
      'name': '9月',
      'value': '9'
    },
    {
      'name': '10月',
      'value': '10'
    },
    {
      'name': '11月',
      'value': '11'
    },
    {
      'name': '12月',
      'value': '12'
    },
    {
      'name': '1月',
      'value': '001',
      'parent': '1'
    },
    {
      'name': '2月',
      'value': '002',
      'parent': '1'
    },
    {
      'name': '3月',
      'value': '003',
      'parent': '1'
    },
    {
      'name': '4月',
      'value': '004',
      'parent': '1'
    },
    {
      'name': '5月',
      'value': '005',
      'parent': '1'
    },
    {
      'name': '6月',
      'value': '006',
      'parent': '1'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '1'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '1'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '1'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '1'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '1'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '1'
    },
    {
      'name': '2月',
      'value': '002',
      'parent': '2'
    },
    {
      'name': '3月',
      'value': '003',
      'parent': '2'
    },
    {
      'name': '4月',
      'value': '004',
      'parent': '2'
    },
    {
      'name': '5月',
      'value': '005',
      'parent': '2'
    },
    {
      'name': '6月',
      'value': '006',
      'parent': '2'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '2'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '2'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '2'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '2'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '2'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '2'
    },
    {
      'name': '3月',
      'value': '003',
      'parent': '3'
    },
    {
      'name': '4月',
      'value': '004',
      'parent': '3'
    },
    {
      'name': '5月',
      'value': '005',
      'parent': '3'
    },
    {
      'name': '6月',
      'value': '006',
      'parent': '3'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '3'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '3'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '3'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '3'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '3'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '3'
    },
    {
      'name': '4月',
      'value': '004',
      'parent': '4'
    },
    {
      'name': '5月',
      'value': '005',
      'parent': '4'
    },
    {
      'name': '6月',
      'value': '006',
      'parent': '4'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '4'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '4'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '4'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '4'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '4'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '4'
    },
    {
      'name': '5月',
      'value': '005',
      'parent': '5'
    },
    {
      'name': '6月',
      'value': '006',
      'parent': '5'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '5'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '5'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '5'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '5'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '5'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '5'
    },
    {
      'name': '6月',
      'value': '006',
      'parent': '6'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '6'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '6'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '6'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '6'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '6'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '6'
    },
    {
      'name': '7月',
      'value': '007',
      'parent': '7'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '7'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '7'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '7'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '7'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '7'
    },
    {
      'name': '8月',
      'value': '008',
      'parent': '8'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '8'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '8'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '8'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '8'
    },
    {
      'name': '9月',
      'value': '009',
      'parent': '9'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '9'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '9'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '9'
    },
    {
      'name': '10月',
      'value': '010',
      'parent': '10'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '10'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '10'
    },
    {
      'name': '11月',
      'value': '011',
      'parent': '11'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '11'
    },
    {
      'name': '12月',
      'value': '012',
      'parent': '12'
    }
  ]
  const colorList = [
    '#F9F900',
    '#6FB7B7',
    '#9999CC',
    '#B766AD',
    '#B87070',
    '#FF8F59',
    '#FFAF60',
    '#FFDC35',
    '#FFFF37',
    '#B7FF4A',
    '#28FF28',
    '#1AFD9C',
    '#00FFFF',
    '#2894FF',
    '#6A6AFF',
    '#BE77FF',
    '#FF77FF',
    '#FF79BC',
    '#FF2D2D',
    '#ADADAD'
  ]
  const colorListLength = 20
  function getRandColor () {
    var tem = Math.round(Math.random() * colorListLength)
    return colorList[tem]
  }
  export default {
    earnsJson,
    termJson,
    getRandColor
  }
</script>
