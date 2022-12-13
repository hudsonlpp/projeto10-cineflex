import styled from "styled-components";

export default function Seat(props) {

  const isSelected = (id) => {
    return props.selectedSeats.includes(id);
  };

  const selectSeat = (id) => {
    if (!isSelected(id)) {
      props.setSelectedSeats(selectedSeats => [...selectedSeats, id]);
    } else {
      props.setSelectedSeats(props.selectedSeats.filter(seat => seat !== id));
    }
  };

  return (
    <>
      {props.seat.isAvailable ? (
        <Button className={isSelected(props.seat.id) ? "selected" : null} onClick={() => selectSeat(props.seat.id)}>
          {String(props.index + 1).padStart(2, "0")}
        </Button>
      ) : (
        <Button className={"unavailable"}>
          {String(props.index + 1).padStart(2, "0")}
        </Button>
      )}
    </>
  );
}

export const Button = styled.button`
  background-color: #C3CFD9;
  border: 1px solid #808F9D;
  border-radius: 12px;
  margin-right: 7px;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 11px;
  margin-bottom: 18px;
  &.unavailable {
    background-color: #FBE192;
    border-color: #F7C52B;
  }
  &.selected {
    background-color: #1AAE9E;
    border-color: #0E7D71;
  }
`