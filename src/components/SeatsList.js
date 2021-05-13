import List from "./general/FlexUl";
import Seat from "./Seat";

export default function SeatsList({ seats }) {
  return (
    <List>
      {seats.map((seat) => (
        <Seat
          isAvailable={seat.isAvailable}
          key={seat.id}
          onClick={(event) => handleSeatSelection(event, seat)}
        >
          {seat.name.length > 1 ? seat.name : `0${seat.name}`}
        </Seat>
      ))}
    </List>
  );

  function handleSeatSelection(event, seat) {
    if (seat.isAvailable) {
      seat.isSelected = !seat.isSelected;
      event.target.classList.toggle("selected");
    } else {
      alert("assento indisponível");
    }
  }
}
