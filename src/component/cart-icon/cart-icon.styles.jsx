import styled from "styled-components";


import{ ReactComponent as ShoppingSvg} from './../../assets/shopping-bag (1).svg'


export let ShoppingIcon = styled(ShoppingSvg)`
      width: 24px;
      height: 24px;
`

export let CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export let ItemCount = styled.span`
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
`

  