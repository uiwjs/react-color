import React, { CSSProperties, Fragment } from 'react';
import {
  HsvaColor,
  hsvaToRgbaString,
  color as handleColor,
  validHex,
  hexToHsva,
  hsvaToHex,
  hsvaToHexa,
} from '@uiw/color-convert';
import Github, { GithubProps, GithubPlacement } from '@uiw/react-color-github';
import Saturation from '@uiw/react-color-saturation';
import Hue from '@uiw/react-color-hue';
import Alpha from '@uiw/react-color-alpha';
import EditableInput from '@uiw/react-color-editable-input';
import EditableInputRGBA from '@uiw/react-color-editable-input-rgba';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';
import { useState } from 'react';
import Arrow from './Arrow';

export enum ChromeInputType {
  HEXA = 'hexa',
  RGBA = 'rgba',
  HSLA = 'hsla',
}

export interface ChromeProps extends Omit<GithubProps, 'colors'> {
  inputType?: ChromeInputType;
}

const Chrome = React.forwardRef<HTMLDivElement, ChromeProps>((props, ref) => {
  const {
    prefixCls = 'w-color-chrome',
    className,
    style,
    color,
    inputType = ChromeInputType.RGBA,
    rectProps = {},
    onChange,
    ...other
  } = props;
  const hsva = (
    typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || { h: 0, s: 0, l: 0, a: 0 }
  ) as HsvaColor;
  const handleChange = (hsv: HsvaColor) => onChange && onChange(handleColor(hsv));
  const [type, setType] = useState(inputType);
  const handleClick = () => {
    if (type === ChromeInputType.RGBA) {
      setType(ChromeInputType.HSLA);
    }
    if (type === ChromeInputType.HSLA) {
      setType(ChromeInputType.HEXA);
    }
    if (type === ChromeInputType.HEXA) {
      setType(ChromeInputType.RGBA);
    }
  };
  const labelStyle: React.CSSProperties = { paddingTop: 6 };
  const inputStyle: React.CSSProperties = { textAlign: 'center', paddingTop: 4, paddingBottom: 4 };
  const wrapperStyle = {
    '--chrome-arrow-fill': '#333',
    '--chrome-arrow-background-color': '#e8e8e8',
    borderRadius: 0,
    flexDirection: 'column',
    width: 230,
    padding: 0,
    ...style,
  } as CSSProperties;
  const alphaStyle = {
    '--chrome-alpha-box-shadow': 'rgb(0 0 0 / 25%) 0px 0px 1px inset',
    borderRadius: '50%',
    background: hsvaToRgbaString(hsva),
    boxShadow: 'var(--chrome-alpha-box-shadow)',
  };
  return (
    <Github
      ref={ref}
      color={hsva}
      style={wrapperStyle}
      colors={undefined}
      className={[prefixCls, className].filter(Boolean).join(' ')}
      placement={GithubPlacement.TopLeft}
      {...other}
      addonAfter={
        <Fragment>
          <Saturation
            hsva={hsva}
            style={{ width: '100%', height: 130 }}
            onChange={(newColor) => {
              handleChange({ ...hsva, ...newColor, a: hsva.a });
            }}
          />
          <div style={{ padding: 15, display: 'flex', alignItems: 'center' }}>
            <Alpha
              width={24}
              height={24}
              hsva={hsva}
              radius={2}
              style={{
                marginRight: 15,
                borderRadius: '50%',
              }}
              bgProps={{ style: { background: 'transparent' } }}
              innerProps={{
                style: alphaStyle,
              }}
              pointer={() => <Fragment />}
            />
            <div style={{ flex: 1 }}>
              <Hue
                hue={hsva.h}
                style={{ width: '100%' }}
                bgProps={{
                  style: { borderRadius: 2 },
                }}
                onChange={(newHue) => {
                  handleChange({ ...hsva, ...newHue });
                }}
              />
              <Alpha
                hsva={hsva}
                style={{ marginTop: 10 }}
                bgProps={{
                  style: { borderRadius: 2 },
                }}
                onChange={(newAlpha) => {
                  handleChange({ ...hsva, ...newAlpha });
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', padding: '0 15px 15px 15px', userSelect: 'none' }}>
            <div style={{ flex: 1 }}>
              {type == ChromeInputType.RGBA && (
                <EditableInputRGBA
                  hsva={hsva}
                  rProps={{ labelStyle, inputStyle }}
                  gProps={{ labelStyle, inputStyle }}
                  bProps={{ labelStyle, inputStyle }}
                  aProps={{ labelStyle, inputStyle }}
                  onChange={(reColor) => handleChange(reColor.hsva)}
                />
              )}
              {type === ChromeInputType.HEXA && (
                <EditableInput
                  label="HEX"
                  labelStyle={labelStyle}
                  inputStyle={inputStyle}
                  value={hsva.a > 0 && hsva.a < 1 ? hsvaToHexa(hsva).toLocaleUpperCase() : hsvaToHex(hsva).toLocaleUpperCase()}
                  onChange={(_, value) => {
                    if (typeof value === 'string') {
                      handleChange(hexToHsva(/^#/.test(value) ? value : `#${value}`));
                    }
                  }}
                />
              )}
              {type === ChromeInputType.HSLA && (
                <EditableInputHSLA
                  hsva={hsva}
                  hProps={{ labelStyle, inputStyle }}
                  sProps={{ labelStyle, inputStyle }}
                  lProps={{ labelStyle, inputStyle }}
                  aProps={{ labelStyle, inputStyle }}
                  onChange={(reColor) => handleChange(reColor.hsva)}
                />
              )}
            </div>
            <Arrow onClick={handleClick} />
          </div>
        </Fragment>
      }
      rectRender={() => <Fragment />}
    />
  );
});

Chrome.displayName = 'Chrome';

export default Chrome;
