import {keyframes} from 'styled-components'

export function customAnimation1(props){
  return keyframes`
    ${props.keyframes.prct0.prct} {
      left:
        ${props.keyframes.prct0.left};
      top:
        ${props.keyframes.prct0.top};
      transform:
        rotate(${props.keyframes.prct0.transform.rotate}) scale(${props.keyframes.prct0.transform.scale}) translate(${props.keyframes.prct0.transform.translate}) skew(${props.keyframes.prct0.transform.skew});
      filter:
        blur(${props.keyframes.prct0.filter.blur}) contrast(${props.keyframes.prct0.filter.contrast});
    }

    ${props.keyframes.prct100.prct} {
      left:
        ${props.keyframes.prct100.left};
      top:
        ${props.keyframes.prct100.top};
      transform: 
        rotate(${props.keyframes.prct100.transform.rotate}) scale(${props.keyframes.prct100.transform.scale}) translate(${props.keyframes.prct100.transform.translate}) skew(${props.keyframes.prct100.transform.skew});
      filter:
        blur(${props.keyframes.prct100.filter.blur}) contrast(${props.keyframes.prct100.filter.contrast}) drop-shadow(${props.keyframes.prct100.filter.dropShadow});
    }
  `
}

























//: _____________________________________________Use this one to test things out_______________________________________________________


export function customAnimation2 (props) {
  return keyframes`
    ${props.keyframes.prct0.prct} {
      left:
        ${props.keyframes.prct0.left};
      top:
        ${props.keyframes.prct0.top};
      transform:
      rotate(${props.keyframes.prct0.transform.rotate}) scale(${props.keyframes.prct0.transform.scale}) translate(${props.keyframes.prct0.transform.translate}) skew(${props.keyframes.prct0.transform.skew});
      filter:
        blur(${props.keyframes.prct0.filter.blur}) contrast(${props.keyframes.prct0.filter.contrast}) drop-shadow(${props.keyframes.prct0.filter.dropShadow});
    }

    ${props.keyframes.prct100.prct} {
      left:
      ${props.keyframes.prct100.left};
      top:
      ${props.keyframes.prct100.top};
      transform: 
        rotate(${props.keyframes.prct100.transform.rotate}) scale(${props.keyframes.prct100.transform.scale}) translate(${props.keyframes.prct100.transform.translate}) skew(${props.keyframes.prct100.transform.skew});
      filter:
        blur(${props.keyframes.prct100.filter.blur}) contrast(${props.keyframes.prct100.filter.contrast}) drop-shadow(${props.keyframes.prct100.filter.dropShadow});
    }
  `
}