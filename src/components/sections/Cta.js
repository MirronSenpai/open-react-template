import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  
  
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Kontaktieren sie uns!
              </h3>
          </div>
          <div className="cta-action">
            <Input id="email" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Email">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div>                
              </div>
            </Input>
            <Input id="name" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Vorname/Firstname">  
            </Input>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div>                
              </div>
            <Input id="nachname" type="email" label="Nachname/Surname" labelHidden hasIcon="right" placeholder="Nachname/Surname">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div>                
              </div>
            </Input>
            <Input id="Straße & Hausnr" type="email" label="Adresse" labelHidden hasIcon="right" placeholder="Adresse/Adress">  
            </Input>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div> 
                               
              </div>
              <Input id="Stadt" type="email" label="Stadt" labelHidden hasIcon="right" placeholder="Stadt/City">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div>                
              </div>
            </Input>
            <Input id="plz" type="email" label="plz" labelHidden hasIcon="right" placeholder="Postleitzahl/Postcode">  
            </Input>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div> 
                               
              </div> 
              <Input id="land" type="email" label="plz" labelHidden hasIcon="right" placeholder="Postleitzahl/Postcode">  
            </Input>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>&nbsp;</div> 

              </div>
              
          </div>
        </div>
      <label>
        Sprache:
        <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='world'
                options={languageOptions}
                search
                text='Select Language'
                />
        </label> 
      </div>
    </section>
  );
}
Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;