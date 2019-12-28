import {keyframes} from 'styled-components'

export function customAnimation(props){
  return (props.keyframes ? 
    keyframes`
    ${props.keyframes.prct0.prct} {
      left:
        ${props.keyframes.prct0.left};
      top:
        ${props.keyframes.prct0.top};
      transform:
        rotate(${props.keyframes.prct0.transform.rotate}) scale(${props.keyframes.prct0.transform.scale}) translate(${props.keyframes.prct0.transform.translate}) skew(${props.keyframes.prct0.transform.skew});
      filter:
        blur(${props.keyframes.prct0.filter.blur}) opacity(${props.keyframes.prct0.filter.opacity}) brightness(${props.keyframes.prct0.filter.brightness}) contrast(${props.keyframes.prct0.filter.contrast}) drop-shadow(${props.keyframes.prct0.filter.dropShadow});
    }

    ${props.keyframes.prct25.prct} {
      left:
        ${props.keyframes.prct25.left};
      top:
        ${props.keyframes.prct25.top};
      transform:
        rotate(${props.keyframes.prct25.transform.rotate}) scale(${props.keyframes.prct25.transform.scale}) translate(${props.keyframes.prct25.transform.translate}) skew(${props.keyframes.prct25.transform.skew});
      filter:
        blur(${props.keyframes.prct25.filter.blur}) opacity(${props.keyframes.prct25.filter.opacity}) brightness(${props.keyframes.prct25.filter.brightness}) contrast(${props.keyframes.prct25.filter.contrast}) drop-shadow(${props.keyframes.prct25.filter.dropShadow});
    }

    ${props.keyframes.prct50.prct} {
      left:
        ${props.keyframes.prct50.left};
      top:
        ${props.keyframes.prct50.top};
      transform:
        rotate(${props.keyframes.prct50.transform.rotate}) scale(${props.keyframes.prct50.transform.scale}) translate(${props.keyframes.prct50.transform.translate}) skew(${props.keyframes.prct50.transform.skew});
      filter:
        blur(${props.keyframes.prct50.filter.blur}) opacity(${props.keyframes.prct50.filter.opacity}) brightness(${props.keyframes.prct50.filter.brightness}) contrast(${props.keyframes.prct50.filter.contrast}) drop-shadow(${props.keyframes.prct50.filter.dropShadow});
    }

    ${props.keyframes.prct75.prct} {
      left:
        ${props.keyframes.prct75.left};
      top:
        ${props.keyframes.prct75.top};
      transform:
        rotate(${props.keyframes.prct75.transform.rotate}) scale(${props.keyframes.prct75.transform.scale}) translate(${props.keyframes.prct75.transform.translate}) skew(${props.keyframes.prct75.transform.skew});
      filter:
        blur(${props.keyframes.prct75.filter.blur}) opacity(${props.keyframes.prct75.filter.opacity}) brightness(${props.keyframes.prct75.filter.brightness}) contrast(${props.keyframes.prct75.filter.contrast}) drop-shadow(${props.keyframes.prct75.filter.dropShadow});
    }

    ${props.keyframes.prct100.prct} {
      left:
        ${props.keyframes.prct100.left};
      top:
        ${props.keyframes.prct100.top};
      transform: 
        rotate(${props.keyframes.prct100.transform.rotate}) scale(${props.keyframes.prct100.transform.scale}) translate(${props.keyframes.prct100.transform.translate}) skew(${props.keyframes.prct100.transform.skew});
      filter:
        blur(${props.keyframes.prct100.filter.blur}) opacity(${props.keyframes.prct100.filter.opacity}) brightness(${props.keyframes.prct100.filter.brightness}) contrast(${props.keyframes.prct100.filter.contrast}) drop-shadow(${props.keyframes.prct100.filter.dropShadow});
    }
  ` : null)
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