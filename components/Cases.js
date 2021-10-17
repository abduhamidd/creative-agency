/* eslint-disable @next/next/no-img-element */
import React from 'react';

import CasesNext from '../assets/arrow-right.svg';
import CasesPrev from '../assets/arrow-left.svg';
import DelayLink from './../util/DelayLink';
import Image from 'next/image';
const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: "A custom formula for your skin's unique needs",
    img: 'curology-min',
    link: '/cases/curology',
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: 'yourspace-min',
    link: '/cases/yourspace',
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',
    link: '/cases/lumin',
  },
];
export const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <DelayLink
              key={caseItem.id}
              to={caseItem.link}
              delay={1}
              className="case"
              id={caseItem.img}
            >
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <Image
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                  width={200}
                  height={300}
                />
              </div>
            </DelayLink>
          ))}
        </div>
      </div>
    </section>
  );
};
