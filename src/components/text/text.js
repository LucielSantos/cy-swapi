import styled, { css } from 'styled-components';


const switchMarginSize = (sizes, margin) => {

  if(!sizes[margin]){
    return margin;
  }

  if(margin === 0){
    return 0;
  }

  if(margin === true){
    return sizes.md
  }

  return sizes[margin];
};

const switchMarginTop = ({ theme, marginTop = 0 }) => switchMarginSize(theme.marginsPaddings, marginTop);
const switchMarginBottom = ({ theme, marginBottom = 0 }) => switchMarginSize(theme.marginsPaddings, marginBottom);
const switchMarginLeft = ({ theme, marginLeft = 0 }) => switchMarginSize(theme.marginsPaddings, marginLeft);
const switchMarginRight = ({ theme, marginRight = 0 }) => switchMarginSize(theme.marginsPaddings, marginRight);

export const Text = styled.p`
  color: ${({ theme, color = 'primary' }) => theme.colors[color]};
  font-size:  ${({ theme, size = 'md' }) => theme.fontSize[size]};

  margin-top: ${switchMarginTop};
  margin-bottom: ${switchMarginBottom};
  margin-left: ${switchMarginLeft};
  margin-right: ${switchMarginRight};

  text-align: ${({ align = 'left' }) => align};

  ${({clickable}) => clickable && css`
    cursor: pointer;
    transition: .3s;
    
    &:hover{
      filter: brightness(90%);
    }
    
    &:active{
      filter: brightness(80%);
    }
  `}
`;
