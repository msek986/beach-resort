// Higher order Component
// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { withRoomsConsumer } from '../context';
// import Loading from '../components/Loading';

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <div>
//       RoomsContainer
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </div>
//   );
// }

// export default withRoomsConsumer(RoomContainer);

import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import Loading from '../components/Loading';

function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}

export default RoomsContainer;
