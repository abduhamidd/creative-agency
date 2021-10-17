import React, {useEffect} from 'react';
import useWindowDimensions from './../util/useWindowDimensions';
import Link from 'next/link';

export const Banner = () => {
  const {width} = useWindowDimensions();
  console.log(width);
  useEffect(() => {
    console.log(width);
  });
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            {width >= 768 ? (
              <>
                <div className="line">
                  <span>We craft eCommerce brand,</span>
                </div>
                <div className="line">
                  <span>driven by instinct</span>
                </div>
              </>
            ) : (
              <>
                <div className="line">
                  <span>We craft eCommerce</span>
                </div>
                <div className="line">
                  <span>brand,driven by instinct</span>
                </div>
              </>
            )}
          </h2>
          <div className="btn-row">
            <Link href="about">
              <h2>
                More about us <i>{'>'}</i>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
