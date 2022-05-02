export function Value(props:any) {
  return(
    <div className="inline-flex flex-col items-center">
     <div>{ props.value }</div>
     { props.label && <div>{ props.label }</div> }
    </div>
  );
}
