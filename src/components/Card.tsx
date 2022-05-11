
const styles = {
  borderImageSource: 'url(/assets/card-borders.svg)',
  borderImageSlice: '17',
  borderImageWidth: '1.46',
  //borderImageOutset: '2',
  //borderImageRepeat: 'space',
  borderWidth: "15px",
}
// refs: https://css-tricks.com/almanac/properties/b/border-image/#bi-notes-on-svg

export function Card (props:any) {
  return(
    <div className="inline-block" style={styles} >
      <div style={{backgroundColor: "#ede3cc"}}>
        {props.children}
      </div>
    </div>
  );
}

