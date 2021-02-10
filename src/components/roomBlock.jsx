import React from 'react'
import Styled from 'styled-components'

const RoomContainer = Styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .room{
    width: 48%;  
    @media (max-width: 468px){
      width: 100%;
    }
  }
  .roomTitle{
    width: 100%;    
    margin-bottom: 10px;
    padding-bottom: 5px;
    
    h2{
      font-size: clamp(24px, 3vw, 30px);
      margin: 0;
      text-decoration: underline;
    }
  }
  
`
const RoomBlock = ({ room }) => (
  <RoomContainer>
    {room.map(facility => (
      <div className="room" key={facility.id}>
        <div className="roomTitle">
          <h2>{facility.room}</h2>
        </div>
        <div className="roomDesc">
          <ul>
            {facility.features.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </RoomContainer>
)
export default RoomBlock
