
const fs = require('fs');
const xml2js = require('xml2js');
const ObjectToCsv = require('objects-to-csv')

const parser = new xml2js.Parser();

function handleSeriesData() {
    const xml = fs.readFileSync(__dirname + '/data/MTO_SERIES_20210330.xml', 'utf-8');

    parser.parseString(xml, (err, result) => {
        const rowDatas = result.META.SERIES;
        console.log("[", new Date(), "] SERIES", rowDatas.length, "건 조회");
        
        let list = new Array();

        // 모든 key의 value 정보가 array로 저장되어 있음
        // 실제 데이터는 1건만 존재
        // csv 파일에 "["aaa"]" 형태로 데이터가 write 되어 실제 값만 write 되도록 처리
        rowDatas.forEach(element => {
            var item = {
                SERIES_ID: (element.SERIES_ID === undefined ? '' : element.SERIES_ID[0]),
                MASTER_SERIES_ID: (element.MASTER_SERIES_ID === undefined ? '' : element.MASTER_SERIES_ID[0]),
                CP_CD: (element.CP_CD === undefined ? '' : element.CP_CD[0]),
                MCP_CD: (element.MCP_CD === undefined ? '' : element.MCP_CD[0]),
                CONTRACTID: (element.CONTRACTID === undefined ? '' : element.CONTRACTID[0]),
                TITLE: (element.TITLE === undefined ? '' : element.TITLE[0]),
                CTGR_NAME: (element.CTGR_NAME === undefined ? '' : element.CTGR_NAME[0]),
                ORIGIN_TITLE: (element.ORIGIN_TITLE === undefined ? '' : element.ORIGIN_TITLE[0]),
                ORIGIN_TITLE_LANG: (element.ORIGIN_TITLE_LANG === undefined ? '' : element.ORIGIN_TITLE_LANG[0]),
                ENGLISHSUBTITLE: (element.ENGLISHSUBTITLE === undefined ? '' : element.ENGLISHSUBTITLE[0]),
                ENGLISHTITLE: (element.ENGLISHTITLE === undefined ? '' : element.ENGLISHTITLE[0]),
                TITLE_DISPLAY_NAME: (element.TITLE_DISPLAY_NAME === undefined ? '' : element.TITLE_DISPLAY_NAME[0]),
                TITLESHORT: (element.TITLESHORT === undefined ? '' : element.TITLESHORT[0]),
                TITLESORTABLE: (element.TITLESORTABLE === undefined ? '' : element.TITLESORTABLE[0]),
                SUMMARY_LONG: (element.SUMMARY_LONG === undefined ? '' : element.SUMMARY_LONG[0]),
                SUMMARY_MEDIUM: (element.SUMMARY_MEDIUM === undefined ? '' : element.SUMMARY_MEDIUM[0]),
                SUMMARY_SHORT: (element.SUMMARY_SHORT === undefined ? '' : element.SUMMARY_SHORT[0]),
                SERS_ENDBRD_YN: (element.SERS_ENDBRD_YN === undefined ? '' : element.SERS_ENDBRD_YN[0]),
                SEASON_NO: (element.SEASON_NO === undefined ? '' : element.SEASON_NO[0]),
                NUMBEROFEPISODES: (element.NUMBEROFEPISODES === undefined ? '' : element.NUMBEROFEPISODES[0]),
                KTRATING: (element.KTRATING === undefined ? '' : element.KTRATING[0]),
                RATING: (element.RATING === undefined ? '' : element.RATING[0]),
                GENRE_MAIN: (element.GENRE_MAIN === undefined ? '' : element.GENRE_MAIN[0]),
                SUB_GENRE1: (element.SUB_GENRE1 === undefined ? '' : element.SUB_GENRE1[0]),
                SUB_GENRE2: (element.SUB_GENRE2 === undefined ? '' : element.SUB_GENRE2[0]),
                SUB_GENRE3: (element.SUB_GENRE3 === undefined ? '' : element.SUB_GENRE3[0]),
                SUB_GENRE4: (element.SUB_GENRE4 === undefined ? '' : element.SUB_GENRE4[0]),
                SUB_GENRE5: (element.SUB_GENRE5 === undefined ? '' : element.SUB_GENRE5[0]),
                DESCRIPTION: (element.DESCRIPTION === undefined ? '' : element.DESCRIPTION[0]),
                MAINANDSUBKEYWORDS: (element.MAINANDSUBKEYWORDS === undefined ? '' : element.MAINANDSUBKEYWORDS[0]),
                DIRECTOR: (element.DIRECTOR === undefined ? '' : element.DIRECTOR[0]),
                WRITER_DISPLAY: (element.WRITER_DISPLAY === undefined ? '' : element.WRITER_DISPLAY[0]),
                ACTORS_DISPLAY: (element.ACTORS_DISPLAY === undefined ? '' : element.ACTORS_DISPLAY[0]),
                YEAR: (element.YEAR === undefined ? '' : element.YEAR[0]),
                COUNTRY_OF_ORIGIN: (element.COUNTRY_OF_ORIGIN === undefined ? '' : element.COUNTRY_OF_ORIGIN[0]),
                CONTENT_LANGUAGE: (element.CONTENT_LANGUAGE === undefined ? '' : element.CONTENT_LANGUAGE[0]),
                DISTRIBUTOR: (element.DISTRIBUTOR === undefined ? '' : element.DISTRIBUTOR[0]),
                PUBLISHER: (element.PUBLISHER === undefined ? '' : element.PUBLISHER[0]),
                PRODUCER: (element.PRODUCER === undefined ? '' : element.PRODUCER[0]),
                LOCAL_PREMIERE_YEAR: (element.LOCAL_PREMIERE_YEAR === undefined ? '' : element.LOCAL_PREMIERE_YEAR[0]),
                RELEASEDATE: (element.RELEASEDATE === undefined ? '' : element.RELEASEDATE[0]),
                BROAD_CHANNEL: (element.BROAD_CHANNEL === undefined ? '' : element.BROAD_CHANNEL[0]),
                BROAD_DATE: (element.BROAD_DATE === undefined ? '' : element.BROAD_DATE[0]),
                BROAD_DAY: (element.BROAD_DAY === undefined ? '' : element.BROAD_DAY[0]),
                KEYWORD: (element.KEYWORD === undefined ? '' : element.KEYWORD[0]),
                SUBTITLE_DUBBED: (element.SUBTITLE_DUBBED === undefined ? '' : element.SUBTITLE_DUBBED[0]),
                SUBTITLE_DUBBED_LANG: (element.SUBTITLE_DUBBED_LANG === undefined ? '' : element.SUBTITLE_DUBBED_LANG[0]),
                MULTI_AUDIO_FLAG: (element.MULTI_AUDIO_FLAG === undefined ? '' : element.MULTI_AUDIO_FLAG[0]),
                MULTI_AUDIO_INFO: (element.MULTI_AUDIO_INFO === undefined ? '' : element.MULTI_AUDIO_INFO[0]),
                MULTI_CAPTION_FLAG: (element.MULTI_CAPTION_FLAG === undefined ? '' : element.MULTI_CAPTION_FLAG[0]),
                MULTI_CAPTION_INFO: (element.MULTI_CAPTION_INFO === undefined ? '' : element.MULTI_CAPTION_INFO[0]),
                AUDIOLANGUAGE: (element.AUDIOLANGUAGE === undefined ? '' : element.AUDIOLANGUAGE[0]),
                ATTACH_VIDEO_TYPE: (element.ATTACH_VIDEO_TYPE === undefined ? '' : element.ATTACH_VIDEO_TYPE[0]),
                VIDEOSERVICETYPE: (element.VIDEOSERVICETYPE === undefined ? '' : element.VIDEOSERVICETYPE[0]),
                VIDEOTYPE: (element.VIDEOTYPE === undefined ? '' : element.VIDEOTYPE[0]),
                INGESTERTYPE: (element.INGESTERTYPE === undefined ? '' : element.INGESTERTYPE[0]),
                PRIZE: (element.PRIZE === undefined ? '' : element.PRIZE[0]),
                ACTORS_LEADING: (element.ACTORS_LEADING === undefined ? '' : element.ACTORS_LEADING[0]),
                ACTORS_SUPPORTING: (element.ACTORS_SUPPORTING === undefined ? '' : element.ACTORS_SUPPORTING[0]),
                HOST_NAME: (element.HOST_NAME === undefined ? '' : element.HOST_NAME[0]),
                GUESTS: (element.GUESTS === undefined ? '' : element.GUESTS[0]),
                NARRATOR: (element.NARRATOR === undefined ? '' : element.NARRATOR[0]),
                SPORT_EVENT_NAME: (element.SPORT_EVENT_NAME === undefined ? '' : element.SPORT_EVENT_NAME[0]),
                SPORT_LEAGUE: (element.SPORT_LEAGUE === undefined ? '' : element.SPORT_LEAGUE[0]),
                SPORT_BROAD_TYPE: (element.SPORT_BROAD_TYPE === undefined ? '' : element.SPORT_BROAD_TYPE[0]),
                SPORT_ENTRY: (element.SPORT_ENTRY === undefined ? '' : element.SPORT_ENTRY[0]),
                SPORT_HOST_PLACE: (element.SPORT_HOST_PLACE === undefined ? '' : element.SPORT_HOST_PLACE[0]),
                SPORT_HOST_YEAR: (element.SPORT_HOST_YEAR === undefined ? '' : element.SPORT_HOST_YEAR[0]),
                PLAYER: (element.PLAYER === undefined ? '' : element.PLAYER[0]),
                COMPOSER: (element.COMPOSER === undefined ? '' : element.COMPOSER[0]),
                CONDUCTOR: (element.CONDUCTOR === undefined ? '' : element.CONDUCTOR[0]),
                RECORDING_ARTIST: (element.RECORDING_ARTIST === undefined ? '' : element.RECORDING_ARTIST[0]),
                SONG_TITLE: (element.SONG_TITLE === undefined ? '' : element.SONG_TITLE[0]),
                LYRICIST: (element.LYRICIST === undefined ? '' : element.LYRICIST[0]),
                ORGANIZATION: (element.ORGANIZATION === undefined ? '' : element.ORGANIZATION[0]),
                SUBJECT: (element.SUBJECT === undefined ? '' : element.SUBJECT[0]),
                RELIGION_TYPE: (element.RELIGION_TYPE === undefined ? '' : element.RELIGION_TYPE[0]),
                CLASS_YEAR: (element.CLASS_YEAR === undefined ? '' : element.CLASS_YEAR[0]),
                CLASS_TERM: (element.CLASS_TERM === undefined ? '' : element.CLASS_TERM[0]),
                RECOMMEND_AGE: (element.RECOMMEND_AGE === undefined ? '' : element.RECOMMEND_AGE[0]),
                CLASS_LEVEL: (element.CLASS_LEVEL === undefined ? '' : element.CLASS_LEVEL[0]),
                CLASS_GRADE: (element.CLASS_GRADE === undefined ? '' : element.CLASS_GRADE[0]),
                RELATED_MATERIALS: (element.RELATED_MATERIALS === undefined ? '' : element.RELATED_MATERIALS[0]),
                CLASS_PLAN: (element.CLASS_PLAN === undefined ? '' : element.CLASS_PLAN[0]),
                TEACHER: (element.TEACHER === undefined ? '' : element.TEACHER[0]),
                TEACHER_HISTORY: (element.TEACHER_HISTORY === undefined ? '' : element.TEACHER_HISTORY[0]),
                GENRE_DISPLAY: (element.GENRE_DISPLAY === undefined ? '' : element.GENRE_DISPLAY[0]),
                DETAIL_GENRE_DISPLAY: (element.DETAIL_GENRE_DISPLAY === undefined ? '' : element.DETAIL_GENRE_DISPLAY[0]),
                CORNER_WATCH_FLAG: (element.CORNER_WATCH_FLAG === undefined ? '' : element.CORNER_WATCH_FLAG[0])
            };

            list.push(item);
        });

        // csv 파일 생성
        // console.log("[", new Date(), "]", strLocation, "지역 재난문자 총", list.length, "건");
        writeCsvFile(list, 'SERIES');
    });
}

function handleMasterSeriesData() {
    const xml = fs.readFileSync(__dirname + '/data/MTO_MASTER_SERIES_20210330.xml', 'utf-8');

    parser.parseString(xml, (err, result) => {
        const rowDatas = result.META.MASTER_SERIES;
        console.log("[", new Date(), "] MASTER_SERIES", rowDatas.length, "건 조회");
        
        let list = new Array();

        // 모든 key의 value 정보가 array로 저장되어 있음
        // 실제 데이터는 1건만 존재
        // csv 파일에 "["aaa"]" 형태로 데이터가 write 되어 실제 값만 write 되도록 처리
        rowDatas.forEach(element => {
            var item = {
                MASTER_SERIES_ID: (element.MASTER_SERIES_ID === undefined ? '' : element.MASTER_SERIES_ID[0]),
                TITLE: (element.TITLE === undefined ? '' : element.TITLE[0]),
                SEAMLESS_CODE: (element.SEAMLESS_CODE === undefined ? '' : element.SEAMLESS_CODE[0]),
                SEAMLESS_FLAG: (element.SEAMLESS_FLAG === undefined ? '' : element.SEAMLESS_FLAG[0]),
                SERIES_TYPE: (element.SERIES_TYPE === undefined ? '' : element.SERIES_TYPE[0]),
                CP_CD: (element.CP_CD === undefined ? '' : element.CP_CD[0]),
                MCP_CD: (element.MCP_CD === undefined ? '' : element.MCP_CD[0]),
                SERS_ENDBRD_YN: (element.SERS_ENDBRD_YN === undefined ? '' : element.SERS_ENDBRD_YN[0]),
                VIRTUAL_DVD_FLAG: (element.VIRTUAL_DVD_FLAG === undefined ? '' : element.VIRTUAL_DVD_FLAG[0]),
                RATING: (element.RATING === undefined ? '' : element.RATING[0]),
                ADULT_CATEGORY_ONLY: (element.ADULT_CATEGORY_ONLY === undefined ? '' : element.ADULT_CATEGORY_ONLY[0]),
                GENRE_MAIN: (element.GENRE_MAIN === undefined ? '' : element.GENRE_MAIN[0]),
                SUB_GENRE: (element.SUB_GENRE === undefined ? '' : element.SUB_GENRE[0]),
                GENRE_DISPLAY: (element.GENRE_DISPLAY === undefined ? '' : element.GENRE_DISPLAY[0]),
                ORIGIN_TITLE: (element.ORIGIN_TITLE === undefined ? '' : element.ORIGIN_TITLE[0]),
                ORIGIN_TITLE_LANG: (element.ORIGIN_TITLE_LANG === undefined ? '' : element.ORIGIN_TITLE_LANG[0]),
                DIRECTOR: (element.DIRECTOR === undefined ? '' : element.DIRECTOR[0]),
                WRITER_DISPLAY: (element.WRITER_DISPLAY === undefined ? '' : element.WRITER_DISPLAY[0]),
                ACTORS_DISPLAY: (element.ACTORS_DISPLAY === undefined ? '' : element.ACTORS_DISPLAY[0]),
                SEASON_NO: (element.SEASON_NO === undefined ? '' : element.SEASON_NO[0]),
                SUBTITLE_DUBBED: (element.SUBTITLE_DUBBED === undefined ? '' : element.SUBTITLE_DUBBED[0]),
                SUBTITLE_DUBBED_LANG: (element.SUBTITLE_DUBBED_LANG === undefined ? '' : element.SUBTITLE_DUBBED_LANG[0]),
                BROAD_CHANNEL: (element.BROAD_CHANNEL === undefined ? '' : element.BROAD_CHANNEL[0]),
                BROAD_DAY: (element.BROAD_DAY === undefined ? '' : element.BROAD_DAY[0]),
                APPLIED_SCREEN: (element.APPLIED_SCREEN === undefined ? '' : element.APPLIED_SCREEN[0]),
                COUNTRY_OF_ORIGIN: (element.COUNTRY_OF_ORIGIN === undefined ? '' : element.COUNTRY_OF_ORIGIN[0]),
                YEAR: (element.YEAR === undefined ? '' : element.YEAR[0]),
                MULTI_CAPTION_FLAG: (element.MULTI_CAPTION_FLAG === undefined ? '' : element.MULTI_CAPTION_FLAG[0]),
                MULTI_CAPTION_INFO: (element.MULTI_CAPTION_INFO === undefined ? '' : element.MULTI_CAPTION_INFO[0]),
                MULTI_AUDIO_FLAG: (element.MULTI_AUDIO_FLAG === undefined ? '' : element.MULTI_AUDIO_FLAG[0]),
                MULTI_AUDIO_INFO: (element.MULTI_AUDIO_INFO === undefined ? '' : element.MULTI_AUDIO_INFO[0]),
                DESCRIPTION: (element.DESCRIPTION === undefined ? '' : element.DESCRIPTION[0]),
                NOTICE_DESCRIPTION: (element.NOTICE_DESCRIPTION === undefined ? '' : element.NOTICE_DESCRIPTION[0])
            };

            list.push(item);
        });

        // csv 파일 생성
        // console.log("[", new Date(), "]", strLocation, "지역 재난문자 총", list.length, "건");
        writeCsvFile(list, 'MASTER_SERIES');
    });
}

function handleContentData() {
    const xml = fs.readFileSync(__dirname + '/data/MTO_CONTENT_20210330.xml', 'utf-8');

    parser.parseString(xml, (err, result) => {
        const rowDatas = result.META.CONTENT;
        console.log("[", new Date(), "] CONTENT", rowDatas.length, "건 조회");
        
        let list = new Array();

        // 모든 key의 value 정보가 array로 저장되어 있음
        // 실제 데이터는 1건만 존재
        // csv 파일에 "["aaa"]" 형태로 데이터가 write 되어 실제 값만 write 되도록 처리
        rowDatas.forEach(element => {
            var item = {
                CONTENT_ID: (element.CONTENT_ID === undefined ? '' : element.CONTENT_ID[0]),
                MASTER_CONTENT_ID: (element.MASTER_CONTENT_ID === undefined ? '' : element.MASTER_CONTENT_ID[0]),
                SERIES_ID: (element.SERIES_ID === undefined ? '' : element.SERIES_ID[0]),
                CP_CD: (element.CP_CD === undefined ? '' : element.CP_CD[0]),
                MCP_CD: (element.MCP_CD === undefined ? '' : element.MCP_CD[0]),
                CONTRACTID: (element.CONTRACTID === undefined ? '' : element.CONTRACTID[0]),
                TITLE_BRIEF: (element.TITLE_BRIEF === undefined ? '' : element.TITLE_BRIEF[0]),
                CTGR_NAME: (element.CTGR_NAME === undefined ? '' : element.CTGR_NAME[0]),
                TITLE_DISPLAY_NAME: (element.TITLE_DISPLAY_NAME === undefined ? '' : element.TITLE_DISPLAY_NAME[0]),
                ORIGIN_TITLE: (element.ORIGIN_TITLE === undefined ? '' : element.ORIGIN_TITLE[0]),
                ORIGIN_TITLE_LANGUAGE: (element.ORIGIN_TITLE_LANGUAGE === undefined ? '' : element.ORIGIN_TITLE_LANGUAGE[0]),
                ENGLISHSUBTITLE: (element.ENGLISHSUBTITLE === undefined ? '' : element.ENGLISHSUBTITLE[0]),
                ENGLISHTITLE: (element.ENGLISHTITLE === undefined ? '' : element.ENGLISHTITLE[0]),
                TITLESHORT: (element.TITLESHORT === undefined ? '' : element.TITLESHORT[0]),
                EPISODE_NAME: (element.EPISODE_NAME === undefined ? '' : element.EPISODE_NAME[0]),
                SEASON_NO: (element.SEASON_NO === undefined ? '' : element.SEASON_NO[0]),
                ISSERIESPREMIER: (element.ISSERIESPREMIER === undefined ? '' : element.ISSERIESPREMIER[0]),
                EPISODE_ID: (element.EPISODE_ID === undefined ? '' : element.EPISODE_ID[0]),
                IS_FINALE: (element.IS_FINALE === undefined ? '' : element.IS_FINALE[0]),
                SUMMARY_LONG: (element.SUMMARY_LONG === undefined ? '' : element.SUMMARY_LONG[0]),
                Guidance_Words: (element.Guidance_Words === undefined ? '' : element.Guidance_Words[0]),
                SUMMARY_MEDIUM: (element.SUMMARY_MEDIUM === undefined ? '' : element.SUMMARY_MEDIUM[0]),
                SUMMARY_SHORT: (element.SUMMARY_SHORT === undefined ? '' : element.SUMMARY_SHORT[0]),
                KTRATING: (element.KTRATING === undefined ? '' : element.KTRATING[0]),
                RATING: (element.RATING === undefined ? '' : element.RATING[0]),
                DISPLAY_RUN_TIME: (element.DISPLAY_RUN_TIME === undefined ? '' : element.DISPLAY_RUN_TIME[0]),
                GENRE_MAIN: (element.GENRE_MAIN === undefined ? '' : element.GENRE_MAIN[0]),
                SUB_GENRE1: (element.SUB_GENRE1 === undefined ? '' : element.SUB_GENRE1[0]),
                SUB_GENRE2: (element.SUB_GENRE2 === undefined ? '' : element.SUB_GENRE2[0]),
                SUB_GENRE3: (element.SUB_GENRE3 === undefined ? '' : element.SUB_GENRE3[0]),
                SUB_GENRE4: (element.SUB_GENRE4 === undefined ? '' : element.SUB_GENRE4[0]),
                SUB_GENRE5: (element.SUB_GENRE5 === undefined ? '' : element.SUB_GENRE5[0]),
                DESCRIPTION: (element.DESCRIPTION === undefined ? '' : element.DESCRIPTION[0]),
                TITLESORTABLE: (element.TITLESORTABLE === undefined ? '' : element.TITLESORTABLE[0]),
                MAINANDSUBKEYWORDS: (element.MAINANDSUBKEYWORDS === undefined ? '' : element.MAINANDSUBKEYWORDS[0]),
                DIRECTOR: (element.DIRECTOR === undefined ? '' : element.DIRECTOR[0]),
                WRITER_DISPLAY: (element.WRITER_DISPLAY === undefined ? '' : element.WRITER_DISPLAY[0]),
                ACTORS_DISPLAY: (element.ACTORS_DISPLAY === undefined ? '' : element.ACTORS_DISPLAY[0]),
                YEAR: (element.YEAR === undefined ? '' : element.YEAR[0]),
                COUNTRY_OF_ORIGIN: (element.COUNTRY_OF_ORIGIN === undefined ? '' : element.COUNTRY_OF_ORIGIN[0]),
                CONTENT_LANGUAGE: (element.CONTENT_LANGUAGE === undefined ? '' : element.CONTENT_LANGUAGE[0]),
                DISTRIBUTOR: (element.DISTRIBUTOR === undefined ? '' : element.DISTRIBUTOR[0]),
                PUBLISHER: (element.PUBLISHER === undefined ? '' : element.PUBLISHER[0]),
                PRODUCER: (element.PRODUCER === undefined ? '' : element.PRODUCER[0]),
                LOCAL_PREMIERE_YEAR: (element.LOCAL_PREMIERE_YEAR === undefined ? '' : element.LOCAL_PREMIERE_YEAR[0]),
                RELEASEDATE: (element.RELEASEDATE === undefined ? '' : element.RELEASEDATE[0]),
                BROAD_CHANNEL: (element.BROAD_CHANNEL === undefined ? '' : element.BROAD_CHANNEL[0]),
                BROAD_DATE: (element.BROAD_DATE === undefined ? '' : element.BROAD_DATE[0]),
                BROAD_DAY: (element.BROAD_DAY === undefined ? '' : element.BROAD_DAY[0]),
                KEYWORD: (element.KEYWORD === undefined ? '' : element.KEYWORD[0]),
                SUBTITLE_DUBBED: (element.SUBTITLE_DUBBED === undefined ? '' : element.SUBTITLE_DUBBED[0]),
                SUBTITLE_DUBBED_LANG: (element.SUBTITLE_DUBBED_LANG === undefined ? '' : element.SUBTITLE_DUBBED_LANG[0]),
                MULTI_CAPTION_FLAG: (element.MULTI_CAPTION_FLAG === undefined ? '' : element.MULTI_CAPTION_FLAG[0]),
                DEFAULT_CAPTION: (element.DEFAULT_CAPTION === undefined ? '' : element.DEFAULT_CAPTION[0]),
                MULTI_CAPTION_INFO: (element.MULTI_CAPTION_INFO === undefined ? '' : element.MULTI_CAPTION_INFO[0]),
                MULTI_AUDIO_FLAG: (element.MULTI_AUDIO_FLAG === undefined ? '' : element.MULTI_AUDIO_FLAG[0]),
                DEFAULT_AUDIO: (element.DEFAULT_AUDIO === undefined ? '' : element.DEFAULT_AUDIO[0]),
                MULTI_AUDIO_INFO: (element.MULTI_AUDIO_INFO === undefined ? '' : element.MULTI_AUDIO_INFO[0]),
                AUDIOLANGUAGE: (element.AUDIOLANGUAGE === undefined ? '' : element.AUDIOLANGUAGE[0]),
                ATTACH_VIDEO_TYPE: (element.ATTACH_VIDEO_TYPE === undefined ? '' : element.ATTACH_VIDEO_TYPE[0]),
                VIDEOSERVICETYPE: (element.VIDEOSERVICETYPE === undefined ? '' : element.VIDEOSERVICETYPE[0]),
                VIDEOTYPE: (element.VIDEOTYPE === undefined ? '' : element.VIDEOTYPE[0]),
                INGESTERTYPE: (element.INGESTERTYPE === undefined ? '' : element.INGESTERTYPE[0]),
                PRIZE: (element.PRIZE === undefined ? '' : element.PRIZE[0]),
                ACTORS_LEADING: (element.ACTORS_LEADING === undefined ? '' : element.ACTORS_LEADING[0]),
                ACTORS_SUPPORTING: (element.ACTORS_SUPPORTING === undefined ? '' : element.ACTORS_SUPPORTING[0]),
                HOST_NAME: (element.HOST_NAME === undefined ? '' : element.HOST_NAME[0]),
                GUESTS: (element.GUESTS === undefined ? '' : element.GUESTS[0]),
                NARRATOR: (element.NARRATOR === undefined ? '' : element.NARRATOR[0]),
                SPORT_EVENT_NAME: (element.SPORT_EVENT_NAME === undefined ? '' : element.SPORT_EVENT_NAME[0]),
                SPORT_LEAGUE: (element.SPORT_LEAGUE === undefined ? '' : element.SPORT_LEAGUE[0]),
                SPORT_BROAD_TYPE: (element.SPORT_BROAD_TYPE === undefined ? '' : element.SPORT_BROAD_TYPE[0]),
                SPORT_ENTRY: (element.SPORT_ENTRY === undefined ? '' : element.SPORT_ENTRY[0]),
                SPORT_HOST_PLACE: (element.SPORT_HOST_PLACE === undefined ? '' : element.SPORT_HOST_PLACE[0]),
                SPORT_HOST_YEAR: (element.SPORT_HOST_YEAR === undefined ? '' : element.SPORT_HOST_YEAR[0]),
                PLAYER: (element.PLAYER === undefined ? '' : element.PLAYER[0]),
                COMPOSER: (element.COMPOSER === undefined ? '' : element.COMPOSER[0]),
                CONDUCTOR: (element.CONDUCTOR === undefined ? '' : element.CONDUCTOR[0]),
                RECORDING_ARTIST: (element.RECORDING_ARTIST === undefined ? '' : element.RECORDING_ARTIST[0]),
                SONG_TITLE: (element.SONG_TITLE === undefined ? '' : element.SONG_TITLE[0]),
                LYRICIST: (element.LYRICIST === undefined ? '' : element.LYRICIST[0]),
                ORGANIZATION: (element.ORGANIZATION === undefined ? '' : element.ORGANIZATION[0]),
                SUBJECT: (element.SUBJECT === undefined ? '' : element.SUBJECT[0]),
                CLASS_GRADE: (element.CLASS_GRADE === undefined ? '' : element.CLASS_GRADE[0]),
                RELIGION_TYPE: (element.RELIGION_TYPE === undefined ? '' : element.RELIGION_TYPE[0]),
                CLASS_YEAR: (element.CLASS_YEAR === undefined ? '' : element.CLASS_YEAR[0]),
                CLASS_TERM: (element.CLASS_TERM === undefined ? '' : element.CLASS_TERM[0]),
                RECOMMEND_AGE: (element.RECOMMEND_AGE === undefined ? '' : element.RECOMMEND_AGE[0]),
                CLASS_LEVEL: (element.CLASS_LEVEL === undefined ? '' : element.CLASS_LEVEL[0]),
                RELATED_MATERIALS: (element.RELATED_MATERIALS === undefined ? '' : element.RELATED_MATERIALS[0]),
                CLASS_PLAN: (element.CLASS_PLAN === undefined ? '' : element.CLASS_PLAN[0]),
                TEACHER: (element.TEACHER === undefined ? '' : element.TEACHER[0]),
                TEACHER_HISTORY: (element.TEACHER_HISTORY === undefined ? '' : element.TEACHER_HISTORY[0]),
                MOC_ASSETID: (element.MOC_ASSETID === undefined ? '' : element.MOC_ASSETID[0]),
                DNP_ASSETID: (element.DNP_ASSETID === undefined ? '' : element.DNP_ASSETID[0]),
                OMS_ASSETID: (element.OMS_ASSETID === undefined ? '' : element.OMS_ASSETID[0]),
                GENRE_DISPLAY: (element.GENRE_DISPLAY === undefined ? '' : element.GENRE_DISPLAY[0]),
                Detail_Genre_Display: (element.Detail_Genre_Display === undefined ? '' : element.Detail_Genre_Display[0]),
                Corner_Watch_Flag: (element.Corner_Watch_Flag === undefined ? '' : element.Corner_Watch_Flag[0]),
                META_WHEN: (element.META_WHEN === undefined ? '' : element.META_WHEN[0]),
                META_WHERE: (element.META_WHERE === undefined ? '' : element.META_WHERE[0]),
                META_WHAT: (element.META_WHAT === undefined ? '' : element.META_WHAT[0]),
                META_WHO: (element.META_WHO === undefined ? '' : element.META_WHO[0]),
                META_EMOTION: (element.META_EMOTION === undefined ? '' : element.META_EMOTION[0]),
                META_SUBGENRE: (element.META_SUBGENRE === undefined ? '' : element.META_SUBGENRE[0]),
                META_SEARCH: (element.META_SEARCH === undefined ? '' : element.META_SEARCH[0]),
                META_CHARACTER: (element.META_CHARACTER === undefined ? '' : element.META_CHARACTER[0]),
                META_RECO_TARGET: (element.META_RECO_TARGET === undefined ? '' : element.META_RECO_TARGET[0]),
                META_RECO_SITUATION: (element.META_RECO_SITUATION === undefined ? '' : element.META_RECO_SITUATION[0]),
                META_AWARD: (element.META_AWARD === undefined ? '' : element.META_AWARD[0]),
                RATE_CNT: (element.RATE_CNT === undefined ? '' : element.RATE_CNT[0]),
                RATE_TYPE: (element.RATE_TYPE === undefined ? '' : element.RATE_TYPE[0]),
                RATE_AVERAGE: (element.RATE_AVERAGE === undefined ? '' : element.RATE_AVERAGE[0]),
                EXPERT_CODE: (element.EXPERT_CODE === undefined ? '' : element.EXPERT_CODE[0]),
                RATE_VALUE: (element.RATE_VALUE === undefined ? '' : element.RATE_VALUE[0]),
                RATE_COMMENT: (element.RATE_COMMENT === undefined ? '' : element.RATE_COMMENT[0]),
                EXPERT_COMPANY: (element.EXPERT_COMPANY === undefined ? '' : element.EXPERT_COMPANY[0]),
                HOME_PORTAL_USE_YN: (element.HOME_PORTAL_USE_YN === undefined ? '' : element.HOME_PORTAL_USE_YN[0]),
                DIRECTOR_ID: (element.DIRECTOR_ID === undefined ? '' : element.DIRECTOR_ID[0]),
                DIRECTOR_NAME: (element.DIRECTOR_NAME === undefined ? '' : element.DIRECTOR_NAME[0]),
                TRACTOR_DISPLAY_ID: (element.TRACTOR_DISPLAY_ID === undefined ? '' : element.TRACTOR_DISPLAY_ID[0]),
                TRACTOR_DISPLAY_NAME: (element.TRACTOR_DISPLAY_NAME === undefined ? '' : element.TRACTOR_DISPLAY_NAME[0]),
                ASACTOR_DISPLAY_ID: (element.ASACTOR_DISPLAY_ID === undefined ? '' : element.ASACTOR_DISPLAY_ID[0]),
                ASACTOR_DISPLAY_NAME: (element.ASACTOR_DISPLAY_NAME === undefined ? '' : element.ASACTOR_DISPLAY_NAME[0]),
                ACTORS_DISPLAY_ID: (element.ACTORS_DISPLAY_ID === undefined ? '' : element.ACTORS_DISPLAY_ID[0]),
                ACTORS_DISPLAY_NAME: (element.ACTORS_DISPLAY_NAME === undefined ? '' : element.ACTORS_DISPLAY_NAME[0]),
                ACTORS_DISPLAY_ROLE: (element.ACTORS_DISPLAY_ROLE === undefined ? '' : element.ACTORS_DISPLAY_ROLE[0]),
                HASHTAG: (element.HASHTAG === undefined ? '' : element.HASHTAG[0]),
                FILM_CD: (element.FILM_CD === undefined ? '' : element.FILM_CD[0]),
                AUDIENCE_COUNT: (element.AUDIENCE_COUNT === undefined ? '' : element.AUDIENCE_COUNT[0])
            };

            list.push(item);
        });

        // csv 파일 생성
        // console.log("[", new Date(), "]", strLocation, "지역 재난문자 총", list.length, "건");
        writeCsvFile(list, 'CONTENT');
    });
}

function handleMasterContentData() {
    const xml = fs.readFileSync(__dirname + '/data/MTO_MASTER_CONTENT_20210330.xml', 'utf-8');

    parser.parseString(xml, (err, result) => {
        const rowDatas = result.META.CONTENT;
        console.log("[", new Date(), "] MASTER_CONTENT", rowDatas.length, "건 조회");
        
        let list = new Array();

        // 모든 key의 value 정보가 array로 저장되어 있음
        // 실제 데이터는 1건만 존재
        // csv 파일에 "["aaa"]" 형태로 데이터가 write 되어 실제 값만 write 되도록 처리
        rowDatas.forEach(element => {
            var item = {
                MASTER_CONTENT_ID: (element.MASTER_CONTENT_ID === undefined ? '' : element.MASTER_CONTENT_ID[0]),
                SERIES_ID: (element.SERIES_ID === undefined ? '' : element.SERIES_ID[0]),
                TITLE_BRIEF: (element.TITLE_BRIEF === undefined ? '' : element.TITLE_BRIEF[0]),
                CTGR_NAME: (element.CTGR_NAME === undefined ? '' : element.CTGR_NAME[0]),
                TITLE_DISPLAY_NAME: (element.TITLE_DISPLAY_NAME === undefined ? '' : element.TITLE_DISPLAY_NAME[0]),
                ORIGIN_TITLE: (element.ORIGIN_TITLE === undefined ? '' : element.ORIGIN_TITLE[0]),
                ENGLISHSUBTITLE: (element.ENGLISHSUBTITLE === undefined ? '' : element.ENGLISHSUBTITLE[0]),
                ENGLISHTITLE: (element.ENGLISHTITLE === undefined ? '' : element.ENGLISHTITLE[0]),
                TITLESHORT: (element.TITLESHORT === undefined ? '' : element.TITLESHORT[0]),
                EPISODE_NAME: (element.EPISODE_NAME === undefined ? '' : element.EPISODE_NAME[0]),
                EPISODE_ID: (element.EPISODE_ID === undefined ? '' : element.EPISODE_ID[0]),
                SUMMARY_LONG: (element.SUMMARY_LONG === undefined ? '' : element.SUMMARY_LONG[0]),
                SUMMARY_MEDIUM: (element.SUMMARY_MEDIUM === undefined ? '' : element.SUMMARY_MEDIUM[0]),
                SUMMARY_SHORT: (element.SUMMARY_SHORT === undefined ? '' : element.SUMMARY_SHORT[0]),
                KTRATING: (element.KTRATING === undefined ? '' : element.KTRATING[0]),
                RATING: (element.RATING === undefined ? '' : element.RATING[0]),
                GENRE_MAIN: (element.GENRE_MAIN === undefined ? '' : element.GENRE_MAIN[0]),
                SUB_GENRE1: (element.SUB_GENRE1 === undefined ? '' : element.SUB_GENRE1[0]),
                SUB_GENRE2: (element.SUB_GENRE2 === undefined ? '' : element.SUB_GENRE2[0]),
                SUB_GENRE3: (element.SUB_GENRE3 === undefined ? '' : element.SUB_GENRE3[0]),
                SUB_GENRE4: (element.SUB_GENRE4 === undefined ? '' : element.SUB_GENRE4[0]),
                SUB_GENRE5: (element.SUB_GENRE5 === undefined ? '' : element.SUB_GENRE5[0]),
                DESCRIPTION: (element.DESCRIPTION === undefined ? '' : element.DESCRIPTION[0]),
                TITLESORTABLE: (element.TITLESORTABLE === undefined ? '' : element.TITLESORTABLE[0]),
                DIRECTOR: (element.DIRECTOR === undefined ? '' : element.DIRECTOR[0]),
                WRITER_DISPLAY: (element.WRITER_DISPLAY === undefined ? '' : element.WRITER_DISPLAY[0]),
                ACTORS_DISPLAY: (element.ACTORS_DISPLAY === undefined ? '' : element.ACTORS_DISPLAY[0]),
                YEAR: (element.YEAR === undefined ? '' : element.YEAR[0]),
                COUNTRY_OF_ORIGIN: (element.COUNTRY_OF_ORIGIN === undefined ? '' : element.COUNTRY_OF_ORIGIN[0]),
                CONTENT_LANGUAGE: (element.CONTENT_LANGUAGE === undefined ? '' : element.CONTENT_LANGUAGE[0]),
                DISTRIBUTOR: (element.DISTRIBUTOR === undefined ? '' : element.DISTRIBUTOR[0]),
                PUBLISHER: (element.PUBLISHER === undefined ? '' : element.PUBLISHER[0]),
                LOCAL_PREMIERE_YEAR: (element.LOCAL_PREMIERE_YEAR === undefined ? '' : element.LOCAL_PREMIERE_YEAR[0]),
                RELEASEDATE: (element.RELEASEDATE === undefined ? '' : element.RELEASEDATE[0]),
                BROAD_CHANNEL: (element.BROAD_CHANNEL === undefined ? '' : element.BROAD_CHANNEL[0]),
                BROAD_DATE: (element.BROAD_DATE === undefined ? '' : element.BROAD_DATE[0]),
                KEYWORD: (element.KEYWORD === undefined ? '' : element.KEYWORD[0]),
                AUDIOLANGUAGE: (element.AUDIOLANGUAGE === undefined ? '' : element.AUDIOLANGUAGE[0]),
                VIDEOSERVICETYPE: (element.VIDEOSERVICETYPE === undefined ? '' : element.VIDEOSERVICETYPE[0]),
                VIDEOTYPE: (element.VIDEOTYPE === undefined ? '' : element.VIDEOTYPE[0]),
                INGESTERTYPE: (element.INGESTERTYPE === undefined ? '' : element.INGESTERTYPE[0]),
                ACTORS_LEADING: (element.ACTORS_LEADING === undefined ? '' : element.ACTORS_LEADING[0]),
                ACTORS_SUPPORTING: (element.ACTORS_SUPPORTING === undefined ? '' : element.ACTORS_SUPPORTING[0]),
                GENRE_DISPLAY: (element.GENRE_DISPLAY === undefined ? '' : element.GENRE_DISPLAY[0]),
                Detail_Genre_Display: (element.Detail_Genre_Display === undefined ? '' : element.Detail_Genre_Display[0])
            };

            list.push(item);
        });

        // csv 파일 생성
        // console.log("[", new Date(), "]", strLocation, "지역 재난문자 총", list.length, "건");
        writeCsvFile(list, 'MASTER_CONTENT');
    });
}

/**
 * Array Obejct 데이터를 CSV File로 저장한다.
 * @param {Array} list - 재난문자발송 현황 데이터
 * @return {void} Nothing
 */
async function writeCsvFile (list, fileName) {
    // set options for using toDisk function
    // append - whether to append to the file.
    // bom - whether to add the Unicode Byte Order Mark at the beginning of the file.
    // allColumns - whether to check all array items for keys to convert to columns rather than only the first.
    const options = {
        append: true,
        bom: true
    }
    console.log("[", new Date(), `] ${fileName} CSV 파일 생성 시작 :`, list.length, "건 대상");
    const cvs = new ObjectToCsv(list);
    await cvs.toDisk('./files/' + fileName + '.csv', options);
    console.log("[", new Date(), `] ${fileName} CSV 파일 생성 완료 :`, list.length, "건 완료");
}

handleSeriesData();
handleMasterSeriesData();
handleContentData();
handleMasterContentData();