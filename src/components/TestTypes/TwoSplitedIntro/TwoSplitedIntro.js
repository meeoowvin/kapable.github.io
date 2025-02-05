import React, { useCallback } from 'react';
import './loveCharacter.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import { _eventSenderGA } from '../../../tools/tools';
import { Helmet } from 'react-helmet-async';
import OtherLangIcons from '../../Sub/OtherLangIcons';

const TwoSplitedIntro = ({ test, lang, info }) => {
  const _onShareButtonClick = () => {
    const alertMsg =
      lang === 'Kor' ? '"링크가 복사됐어요!"' : 'the link copied!';
    _eventSenderGA('Sharing', 'Click Copy-link Button', 'intro page');
    return alert(alertMsg);
  };

  const metaTagRenderer = useCallback(() => {
    return (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>{`${info?.title}`}</title>
        <meta name='title' content={`${info?.title}`} />
        <meta
          name='description'
          content={`${info?.subTitle}`}
          data-react-helmet='true'
        />
        <link
          rel='main-url'
          href={`https://ktestone.com/kapable.github.io/${test}${lang === 'Kor' ? '' : lang}/`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://ktestone.com/kapable.github.io/${test}${lang === 'Kor' ? '' : lang}/`}
        />
        <meta property='og:title' content={`${info?.title}`} />
        <meta property='og:description' content={`${info?.subTitle}`} />
        <meta
          property='og:image'
          content={`https://images.ktestone.com/main-thumbnail/${test}${lang === 'Kor' ? '' : lang}-thumb.png`}
        />
        <meta property='og:image:alt' content={`${info?.title}`} />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://ktestone.com/kapable.github.io/${test}${lang === 'Kor' ? '' : lang}/`}
        />
        <meta property='twitter:title' content={`${info?.title}`} />
        <meta property='twitter:description' content={`${info?.subTitle}`} />
        <meta
          property='twitter:image'
          content={`https://images.ktestone.com/main-thumbnail/${test}${lang === 'Kor' ? '' : lang}-thumb.png`}
        />
        <meta property='twitter:image:alt' content={`${info?.title}`} />
      </Helmet>
    );
  }, [lang, test, info]);

  const mainBannerRenderer = useCallback(() => {
    if (test + lang === 'loveCharacterEng') {
      return (
        <img
          loading='lazy'
          className='intro-main-img'
          src={`https://images.ktestone.com/introImages/${test}${lang}-intro.jpg`}
          alt={`${test}${lang}-start`}
        />
      );
    } else {
      return (
        <>
          <Link to={`/${test}Female${lang === 'Kor' ? '' : lang}/`}>
            <img
              loading='lazy'
              className='loveCharacter-intro-left-img'
              src={`https://images.ktestone.com/introImages/${test}${lang === 'Kor' ? '' : lang}-intro-left.jpg`}
              alt={`${test}Female`}
            />
          </Link>
          <Link to={`/${test}Male${lang === 'Kor' ? '' : lang}/`}>
            <img
              loading='lazy'
              className='loveCharacter-intro-right-img'
              src={`https://images.ktestone.com/introImages/${test}${lang === 'Kor' ? '' : lang}-intro-right.jpg`}
              alt={`${test}Male`}
            />
          </Link>
        </>
      );
    }
  }, [test, lang]);

  const bottomButtonRenderer = useCallback(() => {
    if (test + lang === 'loveCharacterEng') {
      return (
        <div className='loveCharacter-intro-images-container'>
          <Link to={`/${test}Female${lang === 'Kor' ? '' : lang}/`}>
            <img
              src='https://images.ktestone.com/meta/loveCharacter/Eng/loveChar-button-woman.jpg'
              alt='loveChar-button-woman'
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </Link>
          <Link to={`/${test}Male${lang === 'Kor' ? '' : lang}/`}>
            <img
              src='https://images.ktestone.com/meta/loveCharacter/Eng/loveChar-button-man.jpg'
              alt='loveChar-button-man'
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </Link>
        </div>
      );
    }
  }, [test, lang]);

  return (
    <div>
      {metaTagRenderer()}
      <div className='loveCharacter-intro-images-container'>
        {mainBannerRenderer()}
      </div>
      <OtherLangIcons currentTest={lang === 'Kor' ? test : `${test}${lang}`} />
      {bottomButtonRenderer()}
      <div className='test-intro-with-friend'>
        <CopyToClipboard
          text={`https://ktestone.com/kapable.github.io/${test}${lang === 'Kor' ? '' : lang}/`}
        >
          <img
            loading='lazy'
            src={COPYBTN}
            className='test-intro-with-friend-img'
            onClick={_onShareButtonClick}
            alt='테스트 링크 복사'
          />
        </CopyToClipboard>
      </div>
      <Link to='/'>
        <div className='test-intro-to-main'>
          <img
            loading='lazy'
            className='test-intro-to-main-img'
            src={BACKBTN}
            alt='다른 테스트 하러 뒤로가기'
          />
        </div>
      </Link>
    </div>
  );
};

export default TwoSplitedIntro;
