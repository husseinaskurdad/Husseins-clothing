import { useNavigate } from 'react-router-dom'
import {BackgroundImage, DirectoryItemContainer, Body} from'./directory-item.styles.jsx'


let DirectoryItem = ({category}) => {
    let { title, imageUrl, route} = category

    let navigate = useNavigate()
    let onNavigateHandler = ()  => navigate(route)
return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
    <BackgroundImage 
    imageUrl={imageUrl}
    />
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
   </DirectoryItemContainer>
)
}

export default DirectoryItem











// the only thing slightly confusing here might be the use of prop in our style sheet

// you can pass whatever props you want inside our style component


// style={{backgroundImage: `url(${imageUrl})`}}