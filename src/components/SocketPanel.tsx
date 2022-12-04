import { SocketContext } from "@/context/SocketProvider";
import { useContext, useEffect, useState } from "react";

export interface dataProps {
  flySpeed: number;
  coordinates: {
    longitute: number;
    latitude: number;
    altitude: number;
  };
  nectar: number;
  honey: number;
  fuelLevel: number;
}

export function SocketPanel() {
  const [socket] = useContext(SocketContext);
  const [data, setData] = useState<dataProps>({} as dataProps);
  useEffect(() => {
    socket?.on("socket_data", (res) => {
      console.log("socket data", res);
      if (res) {
        setData(() => res);
      }
    });
  }, [socket]);
  if (!data) {
    return <div>current doesn't have any data</div>;
  }
  return (
    <div>
      <div>
        <label>flySpeed</label>
        <span>{data.flySpeed}</span>
      </div>
      <div>
        <label>coordinates</label>
        <span>
          <i>longitute</i>
          {data.coordinates?.longitute}
        </span>
        <span>
          <i>latitude</i>
          {data.coordinates.latitude}
        </span>
        <span>
          <i>altitude</i>
          {data.coordinates?.altitude}
        </span>
      </div>
      <div>
        <label>nectar</label>
        <span>{data.nectar}</span>
      </div>
      <div>
        <label>honey</label>
        <span>{data.honey}</span>
      </div>
      <div>
        <label>fuelLevel</label>
        <span>{data.fuelLevel}</span>
      </div>
    </div>
  );
}
