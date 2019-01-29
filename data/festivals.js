const festivals = {
  'Arizona': [
    { festival_name: 'Arizona Roots', start_end_dates: '2/9/19-2/10/19', city: 'Chandler', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/California-Roots-Hero-Pic-600x400.jpg' },
    { festival_name: 'Crush Arizona', start_end_dates: '2/15/19-2/16/19', city: 'Chandler', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Crush-Arizona-600x400.jpg' },
    { festival_name: 'McDowell Mountain Music Festival', start_end_dates: '3/1/19-3/3/19', city: 'Phoenix', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/McDowell-Mountain-Festival-Editorial-2-600x400.jpg' },
    { festival_name: 'Innings Festival', start_end_dates: '3/2/19-3/3/19', city: 'Tempe', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Innings-Festival-Hero-1-600x400.jpg' },
    { festival_name: 'Pot of Gold Festival', start_end_dates: '3/15/19-3/17/19', city: 'Chandler', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Pot-of-Gold-1-600x400.jpg' },
    { festival_name: 'Phoenix Lights', start_end_dates: '4/5/19-4/6/19', city: 'Phoenix', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/PhxLights2016-6-600x400.jpg' },
    { festival_name: 'Country Thunder Arizona', start_end_dates: '4/11/19-4/14/19', city: 'Florence', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Form-Festival-Hero-600x400.jpg' },
    { festival_name: 'Form Arcosanti Festival', start_end_dates: '5/10/19-5/12/19', city: 'Arcosanti', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Form-Festival-Hero-600x400.jpg' },
    { festival_name: 'Decadence', start_end_dates: '12/30/19-12/31/19', city: 'Phoenix', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/Decadance_Logo-296x197.jpg' }
  ],
  'California': [
    { festival_name: 'One Love Cali', start_end_dates: '2/8/19-2/10/19', city: 'Long Beach', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Reggae-1-600x400.jpg' },
    { festival_name: 'Noise Pop', start_end_dates: '2/25/19-3/3/19', city: 'San Francisco', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/Music-Festival-Wizard-Treefort-2016-37-600x400.jpg' },
    { festival_name: 'CRSSD Festival', start_end_dates: '3/2/19-3/3/19', city: 'San Diego', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/cdn.uc_.assets.prezly-2-600x400.jpg' },
    { festival_name: 'Musink', start_end_dates: '3/8/19-3/10/19', city: 'Costa Mesa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/DanielRojas-TattooContest-Musink2017-2-600x400.jpg' },
    { festival_name: 'Beyond Wonderland', start_end_dates: '3/22/19-3/23/19', city: 'San Bernardino', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Jake-West-for-Insomniac-1-600x400.jpg' },
    { festival_name: 'Coachella Music Festival', start_end_dates: '4/12/19-4/21/19', city: 'Indio', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/20140413_190510_Mike-Ivankay_T60C3978-600x400.jpg' },
    { festival_name: 'Lusidity Festival', start_end_dates: '4/12/19-4/14/19', city: 'Warner Springs', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/brieana-breeze-lucidity-eudamonia-8952_33197618134_o-600x400.jpg' },
    { festival_name: 'Stagecoach Country Music Festival', start_end_dates: '4/26/19-4/28/19', city: 'Indio', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/Experience_Andrew-Jorgenson_Stagecoach_E0010840-600x400.jpg' },
    { festival_name: 'Serenity Gathering', start_end_dates: '4/26/19-4/28/19', city: 'Oakdale', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Serenity-Gathering-Hero-600x400.jpg' },
    { festival_name: 'Desert Hearts Festival', start_end_dates: '4/26/19-4/29/19', city: 'Warner Springs', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Desert-Hearts-Hero-600x400.jpg' },
    { festival_name: 'Back to the Beach Festival', start_end_dates: '4/27/19-4/19/19', city: 'Huntington Beach', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Back_to_Beach_Festival_Logo-296x197.png' },
    { festival_name: 'West Coast Weekender', start_end_dates: '5/2/19-5/4/19', city: 'San Diego', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/West-Coast-Weekender-Hero-1-600x400.jpg' },
    { festival_name: 'Beachlife Festival', start_end_dates: '5/3/19-5/5/19', city: 'Redondo Beach', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Vito-Valentinetti-Karkle-Live-Music-Beach-2018-1-600x400.jpg' },
    { festival_name: 'Lightning in a Bottle', start_end_dates: '5/8/19-5/13/19', city: 'Bradley', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/Lightning-in-a-Bottle-600x400.jpg' },
    { festival_name: 'Joshua Tree Festival', start_end_dates: '5/16/19-5/19/19', city: 'Joshua Tree', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/JTMF201716-Photo-cred_Jacob-Avanzato-Photography-600x400.jpg' },
    { festival_name: 'Bottlerock Napa Valley', start_end_dates: '5/24/19-5/26/19', city: 'Napa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/BottleRock-3-600x400.jpg' },
    { festival_name: 'California Roots', start_end_dates: '5/24/19-5/26/19', city: 'Monterey', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/California-Roots-Hero-Pic-600x400.jpg' },
    { festival_name: 'The Untz Festival', start_end_dates: '5/31/19-6/2/19', city: 'Mariposa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/JosephRungeUntzFestival-600x400.jpg' },
    { festival_name: 'Huichica Festival', start_end_dates: '6/9/19-6/11/19', city: 'Sonoma', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Vito-Valentinetti-Art-600x400.jpg' },
    { festival_name: 'Country Summer Music Festival', start_end_dates: '6/14/19-6/14/19', city: 'Santa Rosa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/2018-Country-Summer-Fans-600x400.jpg' },
    { festival_name: 'Sierra Nevada World Music Festival', start_end_dates: '6/21/19-6/23/19', city: 'Boonville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/SNWMF11J_3251-Lee_Abel-600x400.jpg' },
    { festival_name: 'Arroyo Seco Weekend', start_end_dates: '6/22/19-6/23/19', city: 'Pasadena', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/ArroyoSeco17-16178-600x400.jpg' },
    { festival_name: 'Kate Wolf Music Festival', start_end_dates: '6/27/19-6/30/19', city: 'Laytonville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/Kate_Wolf_Logo-296x197.jpg' },
    { festival_name: 'High Sierra Music Festival', start_end_dates: '7/4/19-7/7/19', city: 'Quincy', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/High-Sierra-Music-Festival-Parade-600x400.jpg' },
    { festival_name: 'Wanderlust Squaw Valley', start_end_dates: '7/18/19-7/21/19', city: 'Squaw Valley', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Wanderlust-Editorial-3-600x400.jpg' },
    { festival_name: 'Northern Lights', start_end_dates: '7/19/19-7/21/19', city: 'Piercy', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/DJI_0039-600x400.jpg' },
    { festival_name: 'Hard Summer', start_end_dates: '8/3/19-8/4/19', city: 'Fontana', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/HARD-Summer-Hero-600x400.jpg' },
    { festival_name: 'Outside Lands', start_end_dates: '8/9/19-8/11/19', city: 'San Francisco', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2009/09/Vito-Valentinetti-Outside-Lands-2009-10-600x400.jpg' },
    { festival_name: 'Kaaboo', start_end_dates: '9/13/19-9/15/19', city: 'San Diego', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/KAABOO2017_0917_182816-4655_ALIVECOVERAGE-LMC-600x400.jpg' },
    { festival_name: 'Monterey Jazz Festival', start_end_dates: '9/20/19-9/22/19', city: 'Monterey', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Arena_2017MJF_372cMonterey-Jazz-Festival_Cole-Thompson-Editorial-1-600x400.jpg' },
    { festival_name: 'Hardly Strictly Bluegrass', start_end_dates: '10/4/19-10/6/19', city: 'San Francisco', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2012/10/18-Hardly-Strictly-Bluegrass-017-e1546711157753-600x400.jpg' },
    { festival_name: 'Dirtybird Campout West Coast', start_end_dates: '10/4/19-10/6/19', city: 'Waterford', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/ABG_DBC2018-25-600x400.jpg' },
    { festival_name: 'Desert Daze', start_end_dates: '10/10/19-10/13/19', city: 'Riverside', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Vito-Valentinetti-In-the-Woods-600x400.jpg' },
    { festival_name: 'Aftershock', start_end_dates: '10/12/19-10/12/19', city: 'Sacramento', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Aftershock-Hero-Photo-600x400.jpg' },
    { festival_name: 'Hard Day https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Vito-Valentinetti-2015-Sziget-39-600x400.jpg' },
    { festival_name: 'Camp Flog Gnaw Carnival', start_end_dates: '11/9/19-11/10/19', city: 'Los Angeles', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Vito-Valentinetti-TINALS-2017-34-600x400.jpg' },
    { festival_name: 'Dreamstate Social', start_end_dates: '11/22/19-11/23/19', city: 'San Bernadino', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dreamstate-Hero-1-600x400.jpg' },
    { festival_name: 'Snowglobe', start_end_dates: '12/29/19-12/31/19', city: 'South Lake Tahoe', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/IMaGe_5992-600x400.jpg' }
  ],
  'Colorado': [
    { festival_name: 'Country Jam Colorado', start_end_dates: '6/13/19-6/16/19', city: 'Grand Junciton', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Country-Jam-Hero-600x400.jpg' },
    { festival_name: 'Sonic Bloom', start_end_dates: '6/20/19-6/23/19', city: 'Rye', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Sonic-Bloom-Eric-Allen-Editorial-600x400.jpg' },
    { festival_name: 'Telluride Bluegrass Festival', start_end_dates: '6/20/19-6/23/19', city: 'Telluride', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/TellurideBluegrass2013-StringCheeseIncident-EastView-CreditBenkoPhotos-600x400.jpg' },
    { festival_name: 'The Ride Festival', start_end_dates: '7/12/19-7/14/19', city: 'Telluride', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/RIDE-FEST-JACKIE-GREENE-crowd-1030x670-600x400.jpg' },
    { festival_name: 'Global Dance Festival', start_end_dates: '7/19/19-7/20/19', city: 'Denver', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Global-Dance-Festival-Editorial-600x400.jpeg' },
    { festival_name: 'Rockygrass Festival', start_end_dates: '7/26/19-7/28/19', city: 'Lyons', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Rockygrass-Editorial-2-600x400.jpg' },
    { festival_name: 'Arise Music Festival', start_end_dates: '8/2/19-8/4/19', city: 'Loveland', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/MG_5895-600x400.jpg' },
    { festival_name: 'Telluride Blues and Brews', start_end_dates: '9/13/19-9/15/19', city: 'Telluride', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/TellurideBluegrass2013-StringCheeseIncident-EastView-CreditBenkoPhotos-600x400.jpg' },
    { festival_name: 'Decadence Colorado', start_end_dates: '12/30/19-12/31/19', city: 'Denver', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/Decadance_Logo-296x197.jpg' }
  ],
  'Florida': [
    { festival_name: 'The Rock Boat', start_end_dates: '2/1/19-2/6/19', city: 'Tampa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Vito-Valentinetti-Karkle-Live-Music-Beach-2018-1-600x400.jpg' },
    { festival_name: '70000 Tons of Metal', start_end_dates: '1/31/19-2/4/19', city: 'Miami', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/70000TonsofMetal-Hero-Pic-600x400.jpg' },
    { festival_name: 'III Points', start_end_dates: '2/15/19-2/17/19', city: 'Miami', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/III-Points-Hero-Pic-600x400.jpg' },
    { festival_name: 'Forbidden Kingdom', start_end_dates: '2/16/19-2/17/19', city: 'Boca Raton', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Vito-Valentinetti-EXIT-2018-229-600x400.jpg' },
    { festival_name: 'Gasparilla Music Festival', start_end_dates: '3/19/19-3/10/19', city: 'Tampa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Martino-Anthony-Crowd-Shot-Talib-Kweli-jight-1-600x400.jpg' },
    { festival_name: 'Jazz in the Gardens', start_end_dates: '3/9/19-3/10/19', city: 'Miami Gardens', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/JIG10_AJ_5788-600x400.jpg' },
    { festival_name: 'Winter Music Conference', start_end_dates: '3/25/19-3/31/19', city: 'Miami Beach', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Winter-Music-Conference-Hero-600x400.jpg' },
    { festival_name: 'Ultra Miami', start_end_dates: '3/29/19-3/31/19', city: 'Tampa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Ultra-Music-Festival-Hero-5-600x400.jpg' },
    { festival_name: 'Rapture Festival', start_end_dates: '3/29/19-3/30/19', city: 'Miami', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Rapture-Festival-Hero-600x400.jpg' },
    { festival_name: 'Tortuga Music Festival', start_end_dates: '4/12/19-4/14/19', city: 'Fort Lauderdale', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Tortuga-Editorial-600x400.jpg' },
    { festival_name: 'Sunfest', start_end_dates: '5/2/19-5/5/19', city: 'West Palm Beach', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Sunfest-Editorial-2-600x400.jpg' },
    { festival_name: 'Welcome to Rockville', start_end_dates: '5/3/19-5/5/19', city: 'Jacksonville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/APC-Croud-2-Sam-Shapiro-600x400.jpg' },
    { festival_name: 'Rolling Loud Festival', start_end_dates: '5/10/19-5/12/19', city: 'Miami', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Rolling-Loud-Hero-600x400.jpg' },
    { festival_name: 'Sunset Music Festival', start_end_dates: '5/25/19-5/26/19', city: 'Tampa', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/Sunset-Music-Fest-Hero-Pic-600x400.jpg' },
    { festival_name: 'Gulf Coast Jam', start_end_dates: '8/30/19-9/1/19', city: 'Panama City Beach', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Gulf-Coast-Jam-Editorial-600x400.jpg' },
    { festival_name: 'Electric Daisy Carnival', start_end_dates: '11/8/19-11/9/19', city: 'Orlando', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Electric-Daisy-Carnival-600x400.jpg' },
  ],
  'Georgia': [
    { festival_name: 'Savannah Stopover', start_end_dates: '3/7/19-3/9/19', city: 'Savannah', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Savannah-Stopover-Editorial-Pic-600x400.jpeg' },
    { festival_name: 'Savannah Music Festival', start_end_dates: '3/28/19-4/13/19', city: 'Savannah', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Savannah-Music-Festival-Editorial-2-600x400.jpg' },
    { festival_name: 'Sweetwater 420 Festival', start_end_dates: '4/19/19-4/21/19', city: 'Atlanta', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann-600x400.jpg' },
    { festival_name: 'Shaky Knees Festival', start_end_dates: '5/3/19-5/5/19', city: 'Atlanta', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/The-Kills-6-copy-600x400.jpg' },
    { festival_name: 'Shaky Beats Festival', start_end_dates: '5/10/19-5/11/19', city: 'Telluride', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Major-Lazer-3-600x400.jpg' },
    { festival_name: 'Music Midtown', start_end_dates: '9/14/19-9/15/19', city: 'Atlanta', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Vito-Valentinetti-In-the-Woods-600x400.jpg' },
    { festival_name: 'Imagine Festival', start_end_dates: '9/20/19-9/22/19', city: 'Atlanta', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/IMF2016_0828_225057-4974_AGP-1-600x400.jpg' },
    { festival_name: 'A3C Hip Hop Festival', start_end_dates: '10/2/19-10/6/19', city: 'Atlanta', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Vito-Valentinetti-TINALS-2018-2-600x400.jpg' }
  ],
  'Illinois': [
    { festival_name: 'Chicago Open Air', start_end_dates: '5/18/19-5/19/19', city: 'Bridgeview', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Vito-Valentinetti-Crowd-Shot-1-600x400.jpg' },
    { festival_name: 'Summer Camp', start_end_dates: '5/24/19-5/26/19', city: 'Chillicothe', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/Summer-Camp-Hero-Pic-600x400.jpg' },
    { festival_name: 'Spring Awakening', start_end_dates: '6/7/19-6/9/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Spring-Awakening-Hero-600x400.jpg' },
    { festival_name: 'Chicago Blues Festival', start_end_dates: '6/7/19-6/9/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/249_20170609_BLUES_FEST-1-600x400.jpg' },
    { festival_name: 'Country Lakeshake', start_end_dates: '6/21/19-6/23/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Country-LakeShake-600x400.jpg' },
    { festival_name: 'Mamby on the Beach', start_end_dates: '6/22/19-6/23/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Mamby-on-the-Beach-Hero-600x400.jpg' },
    { festival_name: 'Pitchfork Festival', start_end_dates: '7/19/19-7/21/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/IMaGe_0054-e1455894127957-600x400.jpg' },
    { festival_name: 'Lollapalooza Chicago', start_end_dates: '8/1/19-8/4/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/Lolla-Aerial1-600x400.jpg' },
    { festival_name: 'North Coast Music Festival', start_end_dates: '8/30/19-9/1/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/NCMF_Lettuce_-9-1-17_KeithGriner_PhiercePhoto_PRC0637-600x400.jpg' },
    { festival_name: 'Riot Fest Chicago', start_end_dates: '9/13/19-9/15/19', city: 'Chicago', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Riot-Fest-Hero-Pic-600x400.jpg' },
    { festival_name: 'Pygmalion Music Festival', start_end_dates: '9/26/19-9/29/19', city: 'Champaign', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/Pygmalion_Logo-296x197.jpg' }
  ],
  'Louisiana': [
    { festival_name: 'Buku Music + Art Project', start_end_dates: '3/22/19-3/23/19', city: 'New Orleans', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/BUKU-2016-2-600x400.jpg' },
    { festival_name: 'New Orleans Jazz Fest', start_end_dates: '4/25/19-5/5/19', city: 'New Orleans', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Jazz-Fest-Acura-Stage-Douglas-Mason-600x400.jpg' },
    { festival_name: 'Essence Music Festival', start_end_dates: '7/4/19-7/7/19', city: 'New Orleans', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Essence_Music_Festival_Logo-296x197.png' },
    { festival_name: 'Voodoo Experience', start_end_dates: '11/1/19-11/3/19', city: 'New Orleans', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Voodoo_Katrina_Barber-0632-600x400.jpg' }
  ],
  'Maryland': [
    { festival_name: 'M3 Rock Festival', start_end_dates: '5/3/19-5/5/19', city: 'Columbia', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/Vito-Valentinetti-Tinderbox-2017-19-600x400.jpg' },
    { festival_name: 'Maryland Deathfest', start_end_dates: '5/23/19-5/25/19', city: 'Baltimore', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Vito-Valentinetti-Heavy-Montreal-2014-2-600x400.jpg' },
    { festival_name: 'Delfest', start_end_dates: '5/23/19-5/26/19', city: 'Cumberland', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Stage-600x400.jpg' },
    { festival_name: 'Moonrise Festival', start_end_dates: '8/10/19-8/11/19', city: 'Baltimore', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/MOONRISE2017_0813_224527-2587_ALIVECOVERAGE-600x400.jpg' }
  ],
  'Massachusetts': [
    { festival_name: 'New England Metal Festival', start_end_dates: '4/19/19-4/20/19', city: 'Worcester', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Vito-Valentinetti-Heavy-Montreal-2014-53-600x400.jpg' },
    { festival_name: 'Boston Calling', start_end_dates: '5/24/19-5/26/19', city: 'Alliston', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Mumford-Sons-Ty-Johnson-600x400.jpg' },
    { festival_name: 'Solid Sound Festival', start_end_dates: '6/28/19-6/30/19', city: 'North Adams', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/11-IMaGe_9900-e1546614235753-600x400.jpg' },
    { festival_name: 'Levitate Festival', start_end_dates: '7/12/19-7/14/19', city: 'Marshfield', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Levitate-Hero-Pic-600x400.jpg' },
    { festival_name: 'Freshgrass Festival', start_end_dates: '9/20/19-9/22/19', city: 'North Adams', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/17-IMaGe_9913-e1546614100297-600x400.jpg' }
  ],
  'Michigan': [
    { festival_name: 'Movement Detroit', start_end_dates: '5/25/19-5/27/19', city: 'Detroit', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/22-movement-5731-e1464185317595-600x400.jpg' },
    { festival_name: 'Electric Forest', start_end_dates: '6/27/19-6/30/19', city: 'Rothbury', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/Electric-Forest_Spady03-600x400.jpg' },
    { festival_name: 'Faster Horses Country Festival', start_end_dates: '7/19/19-7/21/19', city: 'Brooklyn', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Levitate-Hero-Pic-600x400.jpg' },
    { festival_name: 'We Fest', start_end_dates: '8/1/19-8/3/19', city: 'Detroit Lakes', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/WE-Fest-Hero-Pic-600x400.jpg' },
    { festival_name: 'Hoxeyville', start_end_dates: '8/16/19-8/18/19', city: 'Wellston', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/Hoxeyville-2018-Hero-600x400.jpg' }
  ],
  'Nevada': [
    { festival_name: 'Electric Daisy Carnival Vegas', start_end_dates: '5/17/19-5/19/19', city: 'Las Vegas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/aLIVE-Coverage-for-Insomniac-3-600x400.jpg' },
    { festival_name: 'Punk Rock Bowling', start_end_dates: '5/25/19-5/27/19', city: 'Las Vegas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Punk-Rock-Bowling-crowdshot4.JasonDawes-600x400.jpg' },
    { festival_name: 'Psycho Las Vegas', start_end_dates: '8/16/19-8/18/19', city: 'Las Vegas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Vito-Valentinetti-Heavy-Montreal-2014-59-600x400.jpg' },
    { festival_name: 'Burning Man', start_end_dates: '8/25/19-9/2/19', city: 'Black Rock Desert', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Vito-Valentinetti-TINALS-2017-80-600x400.jpg' },
    { festival_name: 'Life is Beautiful Festival', start_end_dates: '9/20/19-9/22/19', city: 'Las Vegas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Life-is-Beautiful-Hero-600x400.jpg' },
    { festival_name: 'IHeartRadio Festival', start_end_dates: '9/20/19-9/22/19', city: 'Las Vegas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Vito-Valentinetti-Front-Row-Festies-600x400.jpg' }
  ],
  'New York': [
    { festival_name: 'Governors Ball Music Festival', start_end_dates: '5/31/19-6/2/19', city: 'New York City', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/IMaGe_2494-600x400.jpg' },
    { festival_name: 'Taste of Country', start_end_dates: '6/7/19-6/9/19', city: 'Hunter Mountain', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Taste-of-country-Taste-of-Country-Staff-Photographer-Editorial-3-600x400.jpg' },
    { festival_name: 'Mountain Jam', start_end_dates: '6/14/19-6/16/19', city: 'Hunter Mountain', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Mountain-Jam-Mountain-Jam-Staff-photographer-Editorial-2-600x400.jpg' },
    { festival_name: 'Clearwater Festival', start_end_dates: '6/15/19-6/16/19', city: 'Croton-on-Hudson', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/2017-Revival-Crowd-Econosmith.com_-600x400.png' },
    { festival_name: 'Moe.Down', start_end_dates: '9/20/19-9/22/19', city: 'Turin', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2009/06/Vito-Valentinetti-Bonnaroo-2009-24-600x400.jpg' },
    { festival_name: 'Great Blue Heron Festival', start_end_dates: '7/5/19-7/7/19', city: 'Sherman', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Great-Blue-Heron-Hero-600x400.jpg' },
    { festival_name: 'Great South Bay Music Festival', start_end_dates: '7/18/19-7/21/19', city: 'Patchogue', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2009/12/Vito-Valentinetti-10000-Lakes-2009-57-600x400.jpg' },
    { festival_name: 'Bethel Woods Festival', start_end_dates: '8/16/19-8/18/19', city: 'Bethel', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2009/12/Vito-Valentinetti-10000-Lakes-2009-17-600x400.jpg' },
    { festival_name: 'Woodstock', start_end_dates: '8/16/19-8/19/19', city: 'Watkins Glen', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Woodstock-Logo-600x400.jpg' },
    { festival_name: 'Billboard Hot 100 Festival', start_end_dates: '8/17/19-8/18/19', city: 'Long Island', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Vito-Valentinetti-Bright-Lights-600x400.jpg' },
    { festival_name: 'Electric Zoo', start_end_dates: '8/30/19-9/1/19', city: 'New York City', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Electric-Zoo-Hero-Picture-600x400.jpg' }
  ],
  'North Carolina': [
    { festival_name: 'Merlefest', start_end_dates: '4/25/19-4/28/19', city: 'Wilkesboro', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/33520708854_2e6dbe587e_k-600x400.jpg' },
    { festival_name: 'Moogfest', start_end_dates: '4/25/19-4/28/19', city: 'Durham', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Moogfest-armory_derrickMay146_Erez-Avissar_IG-weirdmagique-600x400.jpg' },
    { festival_name: 'Epicenter Festival', start_end_dates: '5/10/19-5/12/19', city: 'Rockingham', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Carolina-Rebellion-Hero-600x400.jpg' },
    { festival_name: 'Hopscotch Festival', start_end_dates: '9/5/19-9/7/19', city: 'Raleigh', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Vito-Valentinetti-TINALS-2017-34-600x400.jpg' }
  ],
  'Ohio': [
    { festival_name: 'Sonic Temple', start_end_dates: '5/17/19-5/19/19', city: 'Columbus', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/Rock-on-the-Range-Editorial-600x400.jpg' },
    { festival_name: 'Dark Star Jubilee', start_end_dates: '5/24/19-5/26/19', city: 'Thornville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Dark-Star-Orchestra-600x400.jpg' },
    { festival_name: 'Camp Anarchy', start_end_dates: '5/31/19-6/2/19', city: 'Thornville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Vito-Valentinetti-Heavy-Montreal-2014-16-600x400.jpg' },
    { festival_name: 'Bunbury Music Festival', start_end_dates: '5/31/19-6/2/19', city: 'Cincinnati', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Bunbury-Editorial-2-600x400.jpg' },
    { festival_name: 'Nelsonville Music Festival', start_end_dates: '6/6/19-6/9/19', city: 'Nelsonville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/JoelPrince-FlamingLips4-Robot-2-600x400.jpg' },
    { festival_name: 'Laurelive', start_end_dates: '6/8/19-6/9/19', city: 'Russel Township', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/LaureLive-600x400.jpeg' },
    { festival_name: 'The Werk Out', start_end_dates: '8/1/19-8/3/19', city: 'Thornville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2011/12/Werks_Press-600x400.jpg' },
    { festival_name: 'Bellwether', start_end_dates: '8/9/19-8/10/19', city: 'Waynesville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Bellwether-Editorial-600x400.jpg' },
    { festival_name: 'Lost Lands', start_end_dates: '9/27/19-9/29/19', city: 'Thornville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Lost-Lands-Hero-600x400.jpg' }
  ],
  'Oregon': [
    { festival_name: '4 Peaks Music Festival', start_end_dates: '6/20/19-6/23/19', city: 'Bend', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/4P__gary_calicott_photo-copy-600x400.jpg' },
    { festival_name: 'Northwest String Summit', start_end_dates: '7/18/19-7/20/19', city: 'North Plains', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/NWSS_160714_JDC-120-of-159_1200w-600x400.jpg' },
    { festival_name: 'Oregon Jamboree', start_end_dates: '8/2/19-8/4/19', city: 'Sweet Home', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Oregon-Jamboree-Editorial-600x400.jpg' },
    { festival_name: 'Pickathon', start_end_dates: '8/2/19-8/4/19', city: 'Happy Valley', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/pickathon-600x400.jpg' },
    { festival_name: 'Willamette Country Mucic Festival', start_end_dates: '8/15/19-8/18/19', city: 'Brownsville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Willamette-Country-Music-Festival-Hero1-600x400.jpg' }
  ],
  'Pennsylvania': [
    { festival_name: 'Elements Lakewood Festival', start_end_dates: '5/24/19-5/27/19', city: 'Lakewood', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Elements-Lakewood-Editorial-03_Chris-Lazzaro-Freedom-Film-LLC-600x400.jpg' },
    { festival_name: 'Roots Picnic', start_end_dates: '6/1/19', city: 'Philadelphia', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Roots-Press-Photo-600x400.png' },
    { festival_name: 'Camp Bisco', start_end_dates: '7/18/19-7/20/19', city: 'Scranton', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Camp-Bisco-Hero-600x400.jpg' },
    { festival_name: 'Big Dub Festival', start_end_dates: '7/24/19-7/28/19', city: 'Artemas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Big-Dub-Hero-600x400.jpg' },
    { festival_name: 'The Peach Music Festival', start_end_dates: '7/25/19-7/28/19', city: 'Scranton', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Vito-Valentinetti-Rock-On-600x400.jpg' },
    { festival_name: 'Flood City Festival', start_end_dates: '8/2/19-8/3/19', city: 'Johnstown', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Flood-City-Editorial-1-600x400.jpgg' },
    { festival_name: 'Musikfest', start_end_dates: '8/2/19-8/11/19', city: 'Bethlehem', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/MF16_08-10_M4MB-Musikfest-2016-c-Keith-Huylebroeck-DSC_8652-1-600x400.jpg' },
    { festival_name: 'Made in America', start_end_dates: '8/31/19-9/1/19', city: 'Philadelphia', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Vito-Valentinetti-Bright-Lights-600x400.jpg' }
  ],
  'Tennessee': [
    { festival_name: 'Big Ears', start_end_dates: '3/21/19-3/24/19', city: 'Knoxville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/Big-Ears-David-Simchock-600x400.jpg' },
    { festival_name: 'Beale Street Music Festival', start_end_dates: '5/3/19-5/5/19', city: 'Memphis', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/Beale-Street-Music-Festival-Editorial-2-600x400.jpg' },
    { festival_name: 'Rhythm N Blooms', start_end_dates: '5/17/19-5/19/19', city: 'Knoxville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Rhythm-N-Blooms-Festival-Hero-600x400.jpg' },
    { festival_name: 'CMA Music Festival', start_end_dates: '6/6/19-6/9/19', city: 'Nashville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Vito-Valentinetti-TINALS-2017-23-600x400.jpg' },
    { festival_name: 'Riverbend Festival', start_end_dates: '6/12/19-6/16/19', city: 'Chattanooga', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/Riverbend-Festival-Hero-600x400.jpg' },
    { festival_name: 'Bonnaroo Music Festival', start_end_dates: '6/13/19-6/16/19', city: 'Manchester', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Big-Red-Brian-Hensley-Photography-600x400.jpg' },
    { festival_name: 'Americanafest', start_end_dates: '9/10/19-9/15/19', city: 'Nashville', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Vito-Valentinetti-Electric-Picnic-Hero-Pic-e1481123514291-600x400.jpg' }
  ],
  'Texas': [
    { festival_name: 'South By Southwest (SXSW)', start_end_dates: '3/11/19-3/17/19', city: 'Austin', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/SXSW_Phantogram-600x400.jpg' },
    { festival_name: 'Old Settler\'s Music Festival', start_end_dates: '4/11/19-4/14/19', city: 'Dale', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Old-Settlers-Hero-Pic-600x400.jpg' },
    { festival_name: 'Fortress Festival', start_end_dates: '4/27/19-4/28/19', city: 'Fort Worth', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Fortress-Festival-Editorial-Wolf-Parade-600x400.jpg' },
    { festival_name: 'Ubbi Dubbi', start_end_dates: '4/2719-4/28/19', city: 'Fort Worth', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Vito-Valentinetti-2015-Sziget-39-600x400.jpg' },
    { festival_name: 'Kaaboo Texas', start_end_dates: '5/10/19-5/12/19', city: 'Arlington', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Kaaboo_Logo-296x197.jpg' },
    { festival_name: 'Neon Desert', start_end_dates: '5/25/19-5/26/19', city: 'El Paso', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/NeonDesert_creditGregNoire-30-e1495724272812-600x400.jpg' },
    { festival_name: 'Float Fest', start_end_dates: '7/20/19-7/21/19', city: 'San Marcos', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Chad-Wadsworth-Saturday-Atmo-30-600x400.jpg' },
    { festival_name: 'River City Rockfest', start_end_dates: '9/21/19', city: 'San Antonio', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/River-City-Rockfest-Hero-600x400.jpg' },
    { festival_name: 'ACL Music Festival', start_end_dates: '10/4/19-10/13/19', city: 'Austin', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Austin-City-Limits-600x400.jpg' },
    { festival_name: 'Levitation', start_end_dates: '11/9/19-11/10/19', city: 'Austin', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Levitation-Festival-Roger-Ho-600x400.jpg' },
    { festival_name: 'Lights All Night', start_end_dates: '12/27/19-12/28/19', city: 'Dallas', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Lights-All-Night-Hero-2-600x400.jpg' }
  ],
  'Virginia': [
    { festival_name: 'Rooster Walk', start_end_dates: '5/23/19-5/26/19', city: 'Axton', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Hammock_PhotoCredit_RogerGupta-600x400.jpg' },
    { festival_name: 'Floydfest', start_end_dates: '7/24/19-7/28/19', city: 'FLoyd', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/FloydFest-Andy-Cox-600x400.jpg' },
    { festival_name: 'Lockn\' Festival', start_end_dates: '8/22/19-8/25/19', city: 'Arrington', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2009/12/Vito-Valentinetti-10000-Lakes-2009-69-600x400.jpg' }
  ],
  'Washington': [
    { festival_name: 'Paradiso Festival', start_end_dates: '6/14/19-6/15/19', city: 'George', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Paradiso-Hero-Pic-600x400.jpg' },
    { festival_name: 'Capitol Hill Block Part', start_end_dates: '7/19/19-7/21/19', city: 'Seattle', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/CHBP-2014-ASAP-Ferg-Crowd-Surf-600x400.jpg' },
    { festival_name: 'Summer Meltdown', start_end_dates: '8/1/19-8/4/19', city: 'Darrington', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/PonceDeLeon_Meltdown2016_River-150-of-168-copy-600x400.jpg' },
    { festival_name: 'Watershed Country Music Festival', start_end_dates: '8/2/19-8/4/19', city: 'George', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Watershed-Festival-Editorial-600x400.jpg' },
    { festival_name: 'Bass Canyon', start_end_dates: '8/23/19-8/25/19', city: 'George', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/13-600x400.jpg' },
    { festival_name: 'Bumbershoot', start_end_dates: '8/31/19-9/1/19', city: 'Seattle', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Vito-Valentinetti-Bumbershoot-2014-36-600x400.jpg' }
  ],
  'Wisconsin': [
    { festival_name: 'Blue Ox Music Festival', start_end_dates: '6/13/19-6/15/19', city: 'Eau Claire', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/BlueOxEditoriale3-600x400.jpg' },
    { festival_name: 'Summerfest', start_end_dates: '6/26/19-7/7/19', city: 'Milwaukee', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/062915_Crowd_AVD-29-600x400.jpg' },
    { festival_name: 'Country Fest', start_end_dates: '6/27/19-6/29/19', city: 'Cadott', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/IMG_1919.JPG-600x400.jpeg' },
    { festival_name: 'Rock Fest Wisconsin', start_end_dates: '7/18/19-7/20/19', city: 'Cadott', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Rockfest-WI-Hero-600x400.jpg' },
    { festival_name: 'Country Jam Wisconsin', start_end_dates: '7/18/19-7/20/19', city: 'Eau Claire', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Country-Jam-Hero-600x400.jpg' },
    { festival_name: 'Country Thunder Wisconsin', start_end_dates: '7/18/19-7/21/19', city: 'Twin Lakes', image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/20170818_COUNTRY_THUNDER_0152JP-600x400.jpg' }
  ]
}



module.exports = festivals;