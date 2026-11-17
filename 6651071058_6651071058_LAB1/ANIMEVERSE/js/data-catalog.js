window.AnimeVerse = window.AnimeVerse || {};

(function (AV) {
  const GENRES = [
    { id: 'Action', vi: 'Hành động', color: '#f43f5e', desc: 'Những trận chiến bùng nổ và nhịp độ dồn dập.' },
    { id: 'Adventure', vi: 'Phiêu lưu', color: '#06b6d4', desc: 'Hành trình khám phá vùng đất mới và thử thách lớn.' },
    { id: 'Fantasy', vi: 'Giả tưởng', color: '#a855f7', desc: 'Ma thuật, thế giới kỳ ảo và thần thoại.' },
    { id: 'Romance', vi: 'Lãng mạn', color: '#ec4899', desc: 'Tình cảm học đường và rung động sâu sắc.' },
    { id: 'School', vi: 'Học đường', color: '#38bdf8', desc: 'Tuổi trẻ, câu lạc bộ và tình bạn dưới mái trường.' },
    { id: 'Comedy', vi: 'Hài hước', color: '#f59e0b', desc: 'Tiếng cười sảng khoái và tình huống duyên dáng.' },
    { id: 'Drama', vi: 'Chính kịch', color: '#8b5cf6', desc: 'Xung đột nội tâm và thông điệp nhân sinh sâu lắng.' },
    { id: 'Mystery', vi: 'Bí ẩn', color: '#14b8a6', desc: 'Phá án, suy luận và những nút thắt khó lường.' },
    { id: 'Horror', vi: 'Kinh dị', color: '#dc2626', desc: 'Bầu không khí rùng rợn và nỗi sợ siêu nhiên.' },
    { id: 'Sci-Fi', vi: 'Khoa học viễn tưởng', color: '#3b82f6', desc: 'Công nghệ tương lai, du hành thời gian và vũ trụ.' },
    { id: 'Sports', vi: 'Thể thao', color: '#10b981', desc: 'Ý chí đồng đội, khát khao chiến thắng và bứt phá.' },
    { id: 'Supernatural', vi: 'Siêu nhiên', color: '#c084fc', desc: 'Lời nguyền, linh hồn và năng lực vượt giới hạn.' }
  ];

  function c(name, jp, alias, role, gender, personality, power, weapon, quote, color) {
    return {
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      name, jp, alias, role, gender, personality, power, weapon, quote,
      color: color || '#a855f7', image: '', imageSource: 'AniList Official Art'
    };
  }

  function a(cfg) {
    return Object.assign({
      seasons: 1, episodes: '12+ tập', status: 'completed', statusLabel: 'Đã hoàn thành',
      director: 'Đang cập nhật', popularityRank: 50,
      theme: { primary: '#a855f7', secondary: '#06b6d4', bgTint: '#0c1024' },
      highlights: [
        { title: 'Khoảnh khắc mở màn biểu tượng', desc: 'Phân cảnh đặt nền móng cho xung đột chính của tác phẩm.', spoiler: false },
        { title: 'Trận đối đầu bước ngoặt', desc: 'Cao trào cảm xúc và hành động định hình số phận nhân vật.', spoiler: false },
        { title: 'Bí mật được hé lộ', desc: 'Nút thắt cốt truyện làm thay đổi toàn bộ cục diện.', spoiler: true }
      ],
      characters: [], related: []
    }, cfg);
  }

  const ANIME_LIST = [
    // ==================== 2024–2026 NỔI BẬT (20 BỘ) ====================
    a({
      id: 'solo-leveling', anilistSearch: 'Ore dake Level Up na Ken',
      title: 'Solo Leveling', titleJp: '俺だけレベルアップな件', titleEn: 'Solo Leveling', titleVi: 'Tôi Thăng Cấp Một Mình',
      era: 'latest', year: 2024, releaseSeason: 'Winter', seasons: 2, episodes: '25 tập (S1: 12, S2 Winter 2025: 13)',
      status: 'completed', statusLabel: 'Hoàn thành 2 mùa (2024–2025)',
      studio: 'A-1 Pictures', creator: 'Chugong / DUBU', director: 'Shunsuke Nakashige',
      genres: ['Action', 'Adventure', 'Fantasy', 'Supernatural'], rating: 8.6, popularityRank: 2,
      theme: { primary: '#8b5cf6', secondary: '#38bdf8', bgTint: '#120b2e' },
      shortDesc: 'Thợ săn yếu nhất nhân loại Sung Jin-Woo thức tỉnh Hệ Thống bí ẩn và trở thành Chúa Tể Bóng Tối.',
      fullDesc: 'Mùa 1 (Winter 2024) và Mùa 2 Arise from the Shadow (Winter 2025) đưa Sung Jin-Woo từ thợ săn hạng E thành người chỉ huy quân đoàn bóng tối chinh phục Đảo Jeju.',
      highlights: [
        { title: 'Hầm Ngục Kép Cartenon', desc: 'Khoảnh khắc Jin-Woo kích hoạt Hệ Thống bí ẩn.', spoiler: false },
        { title: 'Lời Triệu Hồi "Arise" Đầu Tiên', desc: 'Thu phục Hiệp Sĩ Huyết Đỏ Igris vào quân đoàn.', spoiler: true },
        { title: 'Chinh Phục Cổng Đỏ Mùa Đông', desc: 'Trận chiến băng giá chứng minh sức mạnh hạng S.', spoiler: false },
        { title: 'Đột Kích Đảo Jeju', desc: 'Jin-Woo đối đầu Vua Kiến Beru giải cứu thợ săn.', spoiler: true },
        { title: 'Quân Đoàn Bóng Tối Trỗi Dậy', desc: 'Hàng trăm chiến binh bóng tối đồng loạt xuất kích.', spoiler: false }
      ],
      characters: [
        c('Sung Jin-Woo', '水篠旬', 'Chúa Tể Bóng Tối', 'Nhân vật chính', 'Nam', 'Điềm tĩnh, quyết đoán, bảo vệ gia đình', 'Hệ Thống & Triệu hồi Bóng Tối', 'Song dao Kasaka / Kamish', 'Chỉ mình ta thăng cấp — và bóng tối sẽ phủ kín chiến trường.', '#7c3aed'),
        c('Cha Hae-In', '向坂雫', 'Vũ Công Kiếm Hạng S', 'Nữ chính', 'Nữ', 'Nghiêm túc, chính trực', 'Kiếm thuật siêu tốc & giác quan mana', 'Kiếm thánh hiệp sĩ', 'Mùi hương mana của anh ấy hoàn toàn khác biệt.', '#f59e0b'),
        c('Yoo Jin-Ho', '諸菱賢太', 'Phó Hội Ahjin', 'Đồng đội thân tín', 'Nam', 'Trung thành, nhiệt huyết', 'Hỗ trợ chiến thuật & tài chính', 'Giáp khiên hạng cao', 'Đại ca, đi đến đâu em cũng theo đến đó!', '#38bdf8'),
        c('Go Gun-Hee', '後藤清臣', 'Chủ tịch Hiệp hội', 'Lãnh đạo', 'Nam', 'Uy nghiêm, vị tha', 'Sức mạnh Ánh Sáng Rực Rỡ', 'Thể chất siêu phàm', 'Cậu chính là tia hy vọng mà thế giới chờ đợi.', '#eab308'),
        c('Choi Jong-In', '最上真', 'Thợ săn Tối Thượng', 'Hội trưởng Hunters', 'Nam', 'Thông minh, thận trọng', 'Hỏa ma thuật diện rộng', 'Pháp trượng hỏa diễm', 'Chỉ một ngọn lửa có thể thiêu rụi cả tòa tháp.', '#ef4444'),
        c('Baek Yoon-Ho', '白川大虎', 'Bạch Hổ', 'Hội trưởng White Tiger', 'Nam', 'Bộc trực, trọng nghĩa', 'Biến hình Mãnh Thú Bạch Hổ', 'Móng vuốt thú hóa', 'Đôi mắt ta nhìn thấu mọi giới hạn sức mạnh.', '#f8fafc'),
        c('Igris', 'イグリット', 'Hiệp Sĩ Huyết Đỏ', 'Tướng Bóng Tối', 'Nam', 'Kiêu hãnh, tuyệt đối trung thành', 'Kiếm khí bóng tối', 'Đại kiếm huyết sắc', 'Một hiệp sĩ không bao giờ quay lưng trước chủ nhân.', '#dc2626'),
        c('Beru', 'ベル', 'Vua Kiến Bóng Tối', 'Tướng Bóng Tối', 'Nam', 'Sùng kính Jin-Woo tuyệt đối', 'Tốc độ âm thanh, hấp thụ kỹ năng', 'Móng vuốt & độc tố', 'Thưa Bệ Hạ, xin hãy ra lệnh cho kẻ bề tôi này!', '#10b981')
      ],
      related: ['kaiju-no-8', 'jujutsu-kaisen', 'demon-slayer']
    }),
    a({
      id: 'frieren', anilistSearch: 'Sousou no Frieren',
      title: 'Frieren: Beyond Journey\'s End', titleJp: '葬送のフリーレン', titleEn: 'Frieren: Beyond Journey\'s End', titleVi: 'Frieren – Pháp Sư Tiễn Táng',
      era: 'latest', year: 2023, releaseSeason: 'Fall', seasons: 2, episodes: '38 tập (S1: 28, S2 Winter 2026: 10)',
      status: 'completed', statusLabel: 'Mùa 2 hoàn thành 03/2026',
      studio: 'Madhouse', creator: 'Kanehito Yamada & Tsukasa Abe', director: 'Keiichiro Saito / Tomoya Kitagawa',
      genres: ['Adventure', 'Drama', 'Fantasy'], rating: 9.1, popularityRank: 1,
      theme: { primary: '#38bdf8', secondary: '#a7f3d0', bgTint: '#091926' },
      shortDesc: 'Sau khi đánh bại Ma Vương, nữ pháp sư elf bất tử Frieren bước vào hành trình thấu hiểu trái tim con người.',
      fullDesc: 'Kiệt tác fantasy của Madhouse tiếp tục Mùa 2 vào Winter 2026 (16/01–27/03/2026), lay động hàng triệu khán giả nhờ chất thơ về ký ức, thời gian và tình cảm đồng đội cùng Fern và Stark.',
      highlights: [
        { title: 'Tang Lễ Của Anh Hùng Himmel', desc: 'Giọt nước mắt muộn màng mở ra hành trình tìm hiểu con người.', spoiler: false },
        { title: 'Cơn Mưa Sao Băng 50 Năm', desc: 'Lời hứa ngắm sao giữa nhóm anh hùng huyền thoại.', spoiler: false },
        { title: 'Zoltraak Phá Vỡ Kết Giới', desc: 'Phép thuật hủy diệt thời đại mới trên chiến trường.', spoiler: false },
        { title: 'Frieren Khắc Chế Aura', desc: 'Khoảnh khắc phô diễn lượng mana thật sau nghìn năm.', spoiler: true },
        { title: 'Cao Nguyên Phương Bắc Mùa 2', desc: 'Chặng đường năm 2026 đầy thử thách hướng về Ende.', spoiler: false }
      ],
      characters: [
        c('Frieren', 'フリーレン', 'Frieren Tiễn Táng', 'Nhân vật chính', 'Nữ', 'Điềm đạm, mê sưu tầm phép lạ', 'Ma pháp cổ đại & áp chế mana', 'Trượng bán nguyệt', 'Chỉ vỏn vẹn mười năm thôi mà lại thay đổi cả đời ta.', '#38bdf8'),
        c('Fern', 'フェルン', 'Đệ tử của Frieren', 'Nữ chính', 'Nữ', 'Chín chắn, tận tụy, hay giận dỗi', 'Thi triển Zoltraak liên hoàn', 'Trượng gỗ Heiter', 'Cô Frieren, lại ngủ nướng nữa rồi đấy ạ.', '#a855f7'),
        c('Stark', 'シュタルク', 'Đệ tử của Eisen', 'Nhân vật chính', 'Nam', 'Nhút nhát nhưng dũng cảm khi cần', 'Sức mạnh thể chất phá núi', 'Đại rìu chiến', 'Chỉ cần không bỏ chạy, ta đã thắng nỗi sợ rồi.', '#ef4444'),
        c('Himmel', 'ヒンメル', 'Anh hùng diệt Ma Vương', 'Đồng đội quá cố', 'Nam', 'Ấm áp, hào hoa', 'Kiếm thuật siêu việt', 'Kiếm anh hùng', 'Hãy nhớ tới tôi dù chỉ một chút nhé, Frieren.', '#60a5fa'),
        c('Heiter', 'ハイター', 'Tư tế nghiện rượu', 'Đồng đội cũ', 'Nam', 'Hóm hỉnh, nhân hậu', 'Phép trị thương & ban phước', 'Thánh kinh tư tế', 'Sống trọn vẹn từng ngày là phép màu lớn nhất.', '#10b981'),
        c('Eisen', 'アイゼン', 'Chiến binh người lùn', 'Sư phụ Stark', 'Nam', 'Ít nói, vững chãi', 'Phòng ngự bất khả xâm phạm', 'Song rìu chiến', 'Nỗi sợ mới là thứ giữ cho chiến binh còn sống.', '#f59e0b'),
        c('Serie', 'ゼーリエ', 'Đại Pháp Sư Sống', 'Trưởng Hiệp hội', 'Nữ', 'Kiêu hãnh, bí ẩn', 'Kho tàng phép thuật tối thượng', 'Vòng nguyệt quế', 'Phép thuật dành cho kẻ dám mơ mộng.', '#eab308'),
        c('Aura', 'アウラ', 'Aura Máy Chém', 'Thất Hiền Hủy Diệt', 'Nữ', 'Tàn nhẫn, tự phụ', 'Cán cân Phục Tùng linh hồn', 'Cán cân Obedience', 'Trước cán cân này, kẻ yếu hơn phải quy phục.', '#f43f5e')
      ],
      related: ['witch-hat-atelier', 'apothecary-diaries', 'vinland-saga']
    }),
    a({
      id: 'dandadan', anilistSearch: 'Dandadan',
      title: 'Dandadan', titleJp: 'ダンダダン', titleEn: 'DAN DA DAN', titleVi: 'Dandadan – Siêu Linh Đại Chiến',
      era: 'latest', year: 2024, releaseSeason: 'Fall', seasons: 2, episodes: '24 tập (S1: 12, S2 Summer 2025: 12)',
      status: 'completed', statusLabel: 'Hoàn thành 2 mùa (2024–2025)',
      studio: 'Science SARU', creator: 'Yukinobu Tatsu', director: 'Fuga Yamashiro / Abel Gongora',
      genres: ['Action', 'Comedy', 'Sci-Fi', 'Supernatural', 'Romance'], rating: 8.5, popularityRank: 4,
      theme: { primary: '#ec4899', secondary: '#22d3ee', bgTint: '#230b1f' },
      shortDesc: 'Cô nàng tin ma quỷ Momo và cậu mọt UFO Okarun bị cuốn vào cuộc chiến siêu nhiên điên rồ.',
      fullDesc: 'Science SARU bùng nổ với 2 mùa (2024–2025) pha trộn hoàn hảo giữa hành động tốc độ cao, hài hước táo bạo, tình cảm học trò và những câu chuyện quá khứ đầy cảm động.',
      characters: [
        c('Momo Ayase', '綾瀬桃', 'Cô nàng tâm linh', 'Nữ chính', 'Nữ', 'Mạnh mẽ, bộc trực', 'Niệm lực bàn tay tâm linh', 'Năng lực ngoại cảm', 'Đừng có động vào bạn của tôi, lũ quái vật!', '#ec4899'),
        c('Ken Takakura', '高倉健', 'Okarun', 'Nam chính', 'Nam', 'Nhút nhát, hết mình vì bạn', 'Lời nguyền Bà Già Tốc Độ', 'Tốc độ 100 km/h', 'Tôi sẽ mạnh lên để bảo vệ Momo!', '#f43f5e'),
        c('Seiko Ayase', '綾瀬星子', 'Bà ngoại Santa Dodoria', 'Pháp sư trừ tà', 'Nữ', 'Trẻ trung, nghiêm khắc', 'Kết giới địa linh & bùa chú', 'Gậy bóng chày trừ tà', 'Ngoài địa bàn của ta thì cẩn thận lấy mạng!', '#a855f7'),
        c('Turbo Granny', 'ターボババア', 'Bà Già Tốc Độ', 'Đồng minh bất đắc dĩ', 'Nữ', 'Đanh đá trong hình hài mèo thần tài', 'Tốc độ siêu thanh', 'Tượng mèo Maneki-neko', 'Cho ta ăn cua hoàng đế rồi nói tiếp!', '#f59e0b'),
        c('Jin Enjoji', '円城寺仁', 'Jiji', 'Bạn thuở nhỏ', 'Nam', 'Tăng động, tốt bụng', 'Khí công & vật chủ Evil Eye', 'Quả cầu ác nhãn', 'Mình không để ai gánh đau một mình nữa.', '#06b6d4'),
        c('Aira Shiratori', '白鳥愛羅', 'Thủ lĩnh tự phong', 'Đồng đội', 'Nữ', 'Tự tin, quả cảm', 'Vũ điệu Acrobatic Silky', 'Dải tóc sắc bén', 'Ta là chiến binh thanh tẩy cái ác!', '#f472b6'),
        c('Evil Eye', '邪視', 'Oán linh núi lửa', 'Phản diện / Nhân cách 2', 'Nam', 'Hiếu chiến', 'Kết giới lời nguyền', 'Quả cầu oán khí', 'Chơi với ta đi!', '#8b5cf6'),
        c('Rokuro Serpo', 'セルポ星人', 'Người hành tinh Serpo', 'Đồng minh bất ngờ', 'Nam', 'Thực dụng, máy móc', 'Sóng tâm linh dịch chuyển', 'Vũ khí sinh học', 'Làm thêm ở cửa hàng tiện lợi thật khắc nghiệt.', '#38bdf8')
      ],
      related: ['chainsaw-man', 'jujutsu-kaisen', 'sakamoto-days']
    }),
    a({
      id: 'kaiju-no-8', anilistSearch: 'Kaijuu 8-gou',
      title: 'Kaiju No. 8', titleJp: '怪獣８号', titleEn: 'Kaiju No. 8', titleVi: 'Quái Vật Số 8',
      era: 'latest', year: 2024, releaseSeason: 'Spring', seasons: 2, episodes: '23 tập (S1: 12, S2 Summer 2025: 11)',
      status: 'completed', statusLabel: 'Hoàn thành 2 mùa (2024–2025)',
      studio: 'Production I.G', creator: 'Naoya Matsumoto', director: 'Shigeyuki Miya / Tomomi Kamiya',
      genres: ['Action', 'Sci-Fi', 'Supernatural'], rating: 8.3, popularityRank: 8,
      theme: { primary: '#06b6d4', secondary: '#a3e635', bgTint: '#071b24' },
      shortDesc: 'Nhân viên dọn xác quái vật 32 tuổi Kafka Hibino mang sức mạnh Kaiju số 8 để theo đuổi giấc mơ bảo vệ mọi người.',
      fullDesc: 'Production I.G và Studio Khara tái hiện hoành tráng cuộc chiến sinh tồn trước đại họa Kaiju qua 2 mùa năm 2024–2025.',
      characters: [
        c('Kafka Hibino', '日比野カフカ', 'Kaiju Số 8', 'Nhân vật chính', 'Nam', 'Chân thành, không bỏ cuộc tuổi 32', 'Sức mạnh Kaiju chỉ số 9.8', 'Cú đấm cộng hưởng', 'Tôi muốn đứng cạnh Mina trên chiến trường!', '#06b6d4'),
        c('Mina Ashiro', '亜白ミナ', 'Đội trưởng Đội 3', 'Nữ đội trưởng', 'Nữ', 'Lạnh lùng, chuẩn xác', 'Bắn tỉa giải phóng 96%', 'Đại pháo diệt Kaiju', 'Cậu giữ lời hứa rồi đấy, Kafka.', '#38bdf8'),
        c('Reno Ichikawa', '市川レノ', 'Hậu bối trung thành', 'Đồng đội', 'Nam', 'Chín chắn, nghiêm túc', 'Vũ khí số băng giá No. 6', 'Súng trường đóng băng', 'Tôi sẽ bảo vệ bí mật của anh.', '#60a5fa'),
        c('Kikoru Shinomiya', '四ノ宮キコル', 'Thiên tài trẻ', 'Chiến binh chủ lực', 'Nữ', 'Kiêu hãnh, nỗ lực tột bậc', 'Giải phóng năng lượng vượt ngưỡng', 'Đại rìu khổng lồ', 'Tôi sẽ khiến cha tự hào.', '#facc15'),
        c('Soshiro Hoshina', '保科宗四郎', 'Phó đội trưởng Đội 3', 'Chỉ huy cận chiến', 'Nam', 'Vui tính ngoài đời, cực ngầu khi chiến đấu', 'Song kiếm siêu tốc', 'Song đao & giáp No. 10', 'Vào tầm chém của tôi thì đừng hòng thoát.', '#a855f7'),
        c('Gen Narumi', '鳴海弦', 'Đội trưởng Đội 1', 'Chiến binh mạnh nhất', 'Nam', 'Lười biếng ở nhà, bá đạo trên chiến trường', 'Thị giác tiên tri RT-0001', 'Lưỡi lê phóng điện', 'Cho bọn quái vật thấy sức mạnh áp đảo đi nào.', '#ec4899'),
        c('Isao Shinomiya', '四ノ宮功', 'Tổng tư lệnh', 'Lãnh đạo tối cao', 'Nam', 'Nghiêm khắc, thương con gái', 'Giáp cận chiến No. 2', 'Găng tay trọng lực', 'Kẻ mạnh phải gánh vác vận mệnh nhân loại.', '#f97316'),
        c('Kaiju No. 9', '怪獣９号', 'Kẻ thao túng tri thức', 'Phản diện chính', 'Nam', 'Tàn nhẫn, ham học hỏi', 'Hấp thụ ký ức & tiến hóa', 'Đạn sinh học phân rã', 'Ta sẽ hấp thụ toàn bộ sức mạnh loài người.', '#ef4444')
      ],
      related: ['solo-leveling', 'attack-on-titan', 'jujutsu-kaisen']
    }),
    a({
      id: 'demon-slayer-infinity-castle', anilistSearch: 'Kimetsu no Yaiba Movie Mugenjou',
      title: 'Demon Slayer: Infinity Castle', titleJp: '劇場版「鬼滅の刃」無限城編', titleEn: 'Demon Slayer: Infinity Castle', titleVi: 'Thanh Gươm Diệt Quỷ: Vô Hạn Thành',
      era: 'latest', year: 2025, releaseSeason: 'Summer', seasons: 1, episodes: 'Phim điện ảnh Phần 1 (155 phút)',
      status: 'completed', statusLabel: 'Công chiếu 2025 • Trực tuyến 07/2026',
      studio: 'ufotable', creator: 'Koyoharu Gotouge', director: 'Haruo Sotozaki',
      genres: ['Action', 'Drama', 'Fantasy', 'Supernatural'], rating: 8.9, popularityRank: 3,
      theme: { primary: '#e11d48', secondary: '#fb923c', bgTint: '#220811' },
      shortDesc: 'Trận quyết chiến cuối cùng của Sát Quỷ Đoàn khi toàn bộ Trụ Cột bị kéo vào pháo đài Vô Hạn Thành.',
      fullDesc: 'Phần mở đầu bộ ba điện ảnh khép lại Thanh Gươm Diệt Quỷ do ufotable sản xuất, ra rạp 07/2025 và phát trực tuyến toàn cầu 07/2026.',
      related: ['demon-slayer', 'jujutsu-kaisen-s3', 'attack-on-titan']
    }),
    a({
      id: 'jujutsu-kaisen-s3', anilistSearch: 'Jujutsu Kaisen Shimetsu Kaiyuu',
      title: 'Jujutsu Kaisen: The Culling Game (S3)', titleJp: '呪術廻戦 死滅回游 前編', titleEn: 'Jujutsu Kaisen Season 3', titleVi: 'Chú Thuật Hồi Chiến: Tử Diệt Hồi Du (Mùa 3)',
      era: 'latest', year: 2026, releaseSeason: 'Winter', seasons: 3, episodes: '12 tập (01–03/2026)',
      status: 'completed', statusLabel: 'Hoàn thành Mùa 3 Part 1 (03/2026)',
      studio: 'MAPPA', creator: 'Gege Akutami', director: 'Shota Goshozono',
      genres: ['Action', 'Drama', 'Supernatural'], rating: 8.8, popularityRank: 5,
      theme: { primary: '#dc2626', secondary: '#a855f7', bgTint: '#1b0714' },
      shortDesc: 'Yuji Itadori cùng Yuta Okkotsu bước vào trò chơi sinh tử Tử Diệt Hồi Du do Kenjaku giăng bẫy.',
      fullDesc: 'Mùa 3 khởi chiếu 01/2026 và khép lại 12 tập vào 27/03/2026, mở rộng tuyến Yuta, Maki, Hakari, Higuruma và hành trình giải cứu Gojo Satoru.',
      related: ['jujutsu-kaisen', 'chainsaw-man', 'solo-leveling']
    }),
    a({
      id: 'my-hero-academia-final', anilistSearch: 'Boku no Hero Academia FINAL SEASON',
      title: 'My Hero Academia: Final Season (S8)', titleJp: '僕のヒーローアカデミア FINAL SEASON', titleEn: 'My Hero Academia Final Season', titleVi: 'Học Viện Anh Hùng: Mùa Cuối',
      era: 'latest', year: 2025, releaseSeason: 'Fall', seasons: 8, episodes: '11 tập (2025) + Special 05/2026',
      status: 'completed', statusLabel: 'Hoàn thành (12/2025 & Special 05/2026)',
      studio: 'Bones Film', creator: 'Kohei Horikoshi', director: 'Kenji Nagasaki / Naomi Nakayama',
      genres: ['Action', 'Adventure', 'School', 'Drama'], rating: 8.8, popularityRank: 9,
      theme: { primary: '#10b981', secondary: '#f59e0b', bgTint: '#091f17' },
      shortDesc: 'Hồi kết vĩ đại giữa các Anh Hùng và Liên Minh Tội Phạm, khi Deku dồn hết One For All cứu thế giới.',
      fullDesc: 'Mùa 8 phát sóng 10–12/2025 cùng tập đặc biệt chương 431 ra mắt ngày 02/05/2026, khép lại trọn vẹn hành trình gần một thập kỷ của lớp 1-A.',
      related: ['naruto-shippuden', 'jujutsu-kaisen-s3', 'solo-leveling']
    }),
    a({
      id: 'sakamoto-days', anilistSearch: 'Sakamoto Days',
      title: 'Sakamoto Days', titleJp: 'SAKAMOTO DAYS', titleEn: 'Sakamoto Days', titleVi: 'Sát Thủ Về Vườn',
      era: 'latest', year: 2025, releaseSeason: 'Winter', seasons: 1, episodes: '22 tập (Cour 1–2: 2025)',
      status: 'completed', statusLabel: 'Hoàn thành 22 tập (09/2025)',
      studio: 'TMS Entertainment', creator: 'Yuto Suzuki', director: 'Masaki Watanabe',
      genres: ['Action', 'Comedy', 'Drama'], rating: 7.9, popularityRank: 14,
      theme: { primary: '#f59e0b', secondary: '#ef4444', bgTint: '#1f1407' },
      shortDesc: 'Huyền thoại sát thủ Taro Sakamoto giải nghệ mở tiệm tạp hóa cùng vợ con nhưng quá khứ không để anh yên.',
      fullDesc: '22 tập phát sóng trong năm 2025 gây nghiện với những pha cận chiến biến mọi vật dụng tạp hóa thành vũ khí đẳng cấp.',
      related: ['spy-x-family', 'gintama', 'dandadan']
    }),
    a({
      id: 'witch-hat-atelier', anilistSearch: 'Tongari Boushi no Atelier',
      title: 'Witch Hat Atelier', titleJp: 'とんがり帽子のアトリエ', titleEn: 'Witch Hat Atelier', titleVi: 'Xưởng Phép Thuật Chóp Nhọn',
      era: 'latest', year: 2026, releaseSeason: 'Spring', seasons: 1, episodes: '13 tập (04–06/2026)',
      status: 'completed', statusLabel: 'Hoàn thành Mùa 1 (06/2026)',
      studio: 'BUG FILMS', creator: 'Kamome Shirahama', director: 'Ayumu Watanabe',
      genres: ['Adventure', 'Drama', 'Fantasy'], rating: 8.6, popularityRank: 11,
      theme: { primary: '#f59e0b', secondary: '#38bdf8', bgTint: '#1a1409' },
      shortDesc: 'Cô bé Coco vô tình khám phá bí mật vẽ ấn chú phép thuật và bước vào xưởng phép của thầy Qifrey.',
      fullDesc: 'Phát sóng Xuân 2026 bởi BUG FILMS, mê hoặc người xem bằng thế giới hội họa phép thuật đầy chất thơ và chiều sâu đạo đức.',
      related: ['frieren', 'apothecary-diaries', 'ranking-of-kings']
    }),
    a({
      id: 'apothecary-diaries', anilistSearch: 'Kusuriya no Hitorigoto',
      title: 'The Apothecary Diaries', titleJp: '薬屋のひとりごと', titleEn: 'The Apothecary Diaries', titleVi: 'Dược Sư Tự Sự',
      era: 'latest', year: 2023, releaseSeason: 'Fall', seasons: 3, episodes: 'S1 (24), S2 (24, 2025), S3 (Đang chiếu Thu 2026)',
      status: 'airing', statusLabel: 'Mùa 3 đang phát sóng (10/2026) • Movie 12/2026',
      studio: 'TOHO animation STUDIO / OLM', creator: 'Natsu Hyuga', director: 'Norihiro Naganuma / Akinori Fudesaka',
      genres: ['Drama', 'Mystery'], rating: 8.9, popularityRank: 6,
      theme: { primary: '#10b981', secondary: '#ec4899', bgTint: '#081b15' },
      shortDesc: 'Cô gái mê độc dược Maomao dùng trí tuệ y học giải mã hàng loạt vụ đầu độc và âm mưu hậu cung.',
      fullDesc: 'Từ Mùa 1, Mùa 2 (2025) tới Mùa 3 khởi chiếu ngày 02/10/2026, Maomao và Jinshi trở thành bộ đôi phá án được yêu thích hàng đầu.',
      related: ['frieren', 'witch-hat-atelier', 'orb-earth']
    }),
    a({
      id: 'oshi-no-ko', anilistSearch: 'Oshi no Ko',
      title: '[Oshi no Ko]', titleJp: '【推しの子】', titleEn: 'Oshi no Ko', titleVi: 'Đứa Con Của Thần Tượng',
      era: 'latest', year: 2023, releaseSeason: 'Spring', seasons: 3, episodes: 'S1 (11), S2 (13, 2024), S3 (11, Winter 2026)',
      status: 'completed', statusLabel: 'Mùa 3 hoàn thành 03/2026 • Mùa 4 đã công bố',
      studio: 'Doga Kobo', creator: 'Aka Akasaka & Mengo Yokoyari', director: 'Daisuke Hiramaki',
      genres: ['Drama', 'Mystery', 'Supernatural'], rating: 8.6, popularityRank: 10,
      theme: { primary: '#ec4899', secondary: '#8b5cf6', bgTint: '#1f0b23' },
      shortDesc: 'Hai anh em Aqua và Ruby bước vào giới giải trí Nhật Bản để tìm sự thật đằng sau bi kịch của Ai Hoshino.',
      fullDesc: 'Tiếp nối Mùa 2 (2024), Mùa 3 (01–03/2026) đẩy cao trào âm mưu trả thù của Aqua và sự trỗi dậy của Ruby trong B-Komachi.',
      related: ['your-lie-in-april', 'bocchi-the-rock', 'apothecary-diaries']
    }),
    a({
      id: 're-zero', anilistSearch: 'Re:Zero kara Hajimeru Isekai Seikatsu',
      title: 'Re:ZERO -Starting Life in Another World-', titleJp: 'Re:ゼロから始める異世界生活', titleEn: 'Re:ZERO', titleVi: 'Bắt Đầu Lại Ở Thế Giới Khác',
      era: 'latest', year: 2016, releaseSeason: 'Spring', seasons: 4, episodes: 'S1–S3 (66) & S4 (19 tập, 04–08/2026)',
      status: 'completed', statusLabel: 'Mùa 4 hoàn thành 08/2026',
      studio: 'White Fox', creator: 'Tappei Nagatsuki', director: 'Masahiro Shinohara',
      genres: ['Drama', 'Fantasy', 'Mystery', 'Supernatural'], rating: 8.6, popularityRank: 12,
      theme: { primary: '#a855f7', secondary: '#ec4899', bgTint: '#1a0a24' },
      shortDesc: 'Subaru Natsuki mang lời nguyền Hồi Sinh Bằng Cái Chết vượt qua vô vàn bi kịch để bảo vệ những người mình yêu.',
      fullDesc: 'Tiếp nối Mùa 3 tại Priestella (2024–2025), Mùa 4 (04–08/2026) đưa Subaru và Emilia tiến vào Tháp Canh Pleiades.',
      related: ['steins-gate', 'frieren', 'mushoku-tensei']
    }),
    a({
      id: 'blue-lock', anilistSearch: 'Blue Lock',
      title: 'Blue Lock', titleJp: 'ブルーロック', titleEn: 'Blue Lock', titleVi: 'Tiền Đạo Số 1',
      era: 'latest', year: 2022, releaseSeason: 'Fall', seasons: 2, episodes: '38 tập (S1: 24, S2 2024–2025: 14)',
      status: 'completed', statusLabel: 'Hoàn thành 2 mùa • Mùa 3 đã công bố',
      studio: '8bit', creator: 'Muneyuki Kaneshiro & Yusuke Nomura', director: 'Tetsuaki Watanabe / Yuji Haibara',
      genres: ['Sports', 'Action', 'Drama'], rating: 8.2, popularityRank: 15,
      theme: { primary: '#2563eb', secondary: '#06b6d4', bgTint: '#061430' },
      shortDesc: '300 tiền đạo trẻ cạnh tranh trong dự án Blue Lock khắc nghiệt để tạo ra tiền đạo ích kỷ số 1 thế giới.',
      fullDesc: 'Mùa 2 vs. U-20 Japan khép lại bằng trận cầu nghẹt thở giữa Blue Lock Eleven và U-20 Nhật Bản.',
      related: ['haikyuu', 'slam-dunk', 'medalist']
    }),
    a({
      id: 'dr-stone', anilistSearch: 'Dr. STONE SCIENCE FUTURE',
      title: 'Dr. STONE: Science Future', titleJp: 'Dr.STONE SCIENCE FUTURE', titleEn: 'Dr. STONE: Science Future', titleVi: 'Tiến Sĩ Đá: Tương Lai Khoa Học',
      era: 'latest', year: 2025, releaseSeason: 'Winter', seasons: 4, episodes: 'Mùa cuối 3 Phần (2025 – 06/2026)',
      status: 'completed', statusLabel: 'Hoàn thành đại kết cục 2026',
      studio: 'TMS Entertainment', creator: 'Riichiro Inagaki & Boichi', director: 'Shuhei Matsushita',
      genres: ['Adventure', 'Comedy', 'Sci-Fi'], rating: 8.5, popularityRank: 18,
      theme: { primary: '#10b981', secondary: '#facc15', bgTint: '#091c12' },
      shortDesc: 'Senku và Vương quốc Khoa học vượt đại dương chế tạo tên lửa lên Mặt Trăng giải mã bí ẩn hóa đá.',
      fullDesc: 'Mùa 4 chia làm 3 phần (2025–06/2026) hoàn tất trọn vẹn hành trình 3.700 năm hồi sinh nền văn minh.',
      related: ['steins-gate', 'orb-earth', 'fullmetal-alchemist']
    }),
    a({
      id: 'medalist', anilistSearch: 'Medalist',
      title: 'Medalist', titleJp: 'メダリスト', titleEn: 'Medalist', titleVi: 'Vận Động Viên Huy Chương',
      era: 'latest', year: 2025, releaseSeason: 'Winter', seasons: 2, episodes: 'S1 (13, 2025), S2 (9, Winter 2026)',
      status: 'completed', statusLabel: 'Hoàn thành 2 mùa (03/2026)',
      studio: 'ENGI', creator: 'Tsurumaikada', director: 'Yasutaka Yamamoto',
      genres: ['Sports', 'Drama'], rating: 8.5, popularityRank: 24,
      theme: { primary: '#38bdf8', secondary: '#fbbf24', bgTint: '#081726' },
      shortDesc: 'HLV thất bại Tsukasa đồng hành cùng cô bé Inori chạm tới giấc mơ Huy chương Vàng trượt băng nghệ thuật.',
      fullDesc: 'Hai mùa 2025–2026 tạo nên cơn sốt thể thao đầy nước mắt và cảm hứng vượt định kiến tuổi tác.',
      related: ['haikyuu', 'blue-lock', 'your-lie-in-april']
    }),
    a({
      id: 'gachiakuta', anilistSearch: 'Gachiakuta',
      title: 'Gachiakuta', titleJp: 'ガチアクタ', titleEn: 'Gachiakuta', titleVi: 'Gachiakuta – Vực Thẳm Rác Thải',
      era: 'latest', year: 2025, releaseSeason: 'Summer', seasons: 1, episodes: '24 tập (07–12/2025)',
      status: 'completed', statusLabel: 'Hoàn thành Mùa 1 (12/2025)',
      studio: 'Bones Film', creator: 'Kei Urana', director: 'Fumihiko Suganuma',
      genres: ['Action', 'Fantasy', 'Drama'], rating: 8.1, popularityRank: 19,
      theme: { primary: '#ef4444', secondary: '#a855f7', bgTint: '#1a0a0e' },
      shortDesc: 'Cậu bé Rudo bị vu oan và ném xuống Vực Thẳm rác thải, nơi cậu thức tỉnh sức mạnh Jinki báo thù.',
      fullDesc: '24 tập của Bones Film gây ấn tượng mạnh với mỹ thuật đường phố gai góc và hệ thống vũ khí Jinki độc đáo.',
      related: ['chainsaw-man', 'kaiju-no-8', 'dorohedoro-s2']
    }),
    a({
      id: 'summer-hikaru-died', anilistSearch: 'Hikaru ga Shinda Natsu',
      title: 'The Summer Hikaru Died', titleJp: '光が死んだ夏', titleEn: 'The Summer Hikaru Died', titleVi: 'Mùa Hè Hikaru Ra Đi',
      era: 'latest', year: 2025, releaseSeason: 'Summer', seasons: 1, episodes: '12 tập (07–09/2025)',
      status: 'completed', statusLabel: 'Hoàn thành Mùa 1 (09/2025)',
      studio: 'CygamesPictures', creator: 'Mokumokuren', director: 'Ryohei Takeshita',
      genres: ['Horror', 'Mystery', 'Drama', 'Supernatural'], rating: 8.2, popularityRank: 25,
      theme: { primary: '#991b1b', secondary: '#a855f7', bgTint: '#14060b' },
      shortDesc: 'Yoshiki nhận ra cậu bạn thân Hikaru đã chết trên núi và bị một thực thể kỳ dị thế chỗ.',
      fullDesc: 'Bộ anime kinh dị tâm lý ám ảnh bậc nhất năm 2025 của CygamesPictures với bầu không khí mùa hè ngột ngạt.',
      related: ['summertime-rendering', 'monster', 'steins-gate']
    }),
    a({
      id: 'orb-earth', anilistSearch: 'Chi. Chikyuu no Undou ni Tsuite',
      title: 'Orb: On the Movements of the Earth', titleJp: 'チ。―地球の運動について―', titleEn: 'Orb: On the Movements of the Earth', titleVi: 'Địa Cầu Chuyển Động',
      era: 'latest', year: 2024, releaseSeason: 'Fall', seasons: 1, episodes: '25 tập (10/2024 – 03/2025)',
      status: 'completed', statusLabel: 'Hoàn thành 25 tập (03/2025)',
      studio: 'Madhouse', creator: 'Uoto', director: 'Kenichi Shimizu',
      genres: ['Drama', 'Mystery'], rating: 8.8, popularityRank: 16,
      theme: { primary: '#f59e0b', secondary: '#38bdf8', bgTint: '#11101d' },
      shortDesc: 'Nhiều thế hệ học giả thế kỷ XV đánh đổi mạng sống để bảo vệ chân lý Trái Đất quay quanh Mặt Trời.',
      fullDesc: 'Bản tráng ca trí tuệ đầy bi tráng của Madhouse nối tiếp ngọn lửa chân lý qua nhiều thế hệ nhân vật.',
      related: ['vinland-saga', 'monster', 'frieren']
    }),
    a({
      id: 'lazarus', anilistSearch: 'Lazarus',
      title: 'Lazarus', titleJp: 'LAZARUS ラザロ', titleEn: 'Lazarus', titleVi: 'Lazarus – Đếm Ngược 30 Ngày',
      era: 'latest', year: 2025, releaseSeason: 'Spring', seasons: 1, episodes: '13 tập (04–06/2025)',
      status: 'completed', statusLabel: 'Hoàn thành 13 tập (06/2025)',
      studio: 'MAPPA', creator: 'Shinichiro Watanabe', director: 'Shinichiro Watanabe',
      genres: ['Action', 'Sci-Fi', 'Mystery'], rating: 7.8, popularityRank: 28,
      theme: { primary: '#06b6d4', secondary: '#f43f5e', bgTint: '#061520' },
      shortDesc: 'Đội đặc nhiệm Lazarus chỉ có 30 ngày để tìm bác sĩ Skinner trước khi thuốc Hapna giết chết nhân loại.',
      fullDesc: 'Tác phẩm gốc của Shinichiro Watanabe hợp tác MAPPA và biên đạo hành động Chad Stahelski trên nền nhạc jazz-electronic.',
      related: ['cowboy-bebop', 'cyberpunk-edgerunners', 'zenshu']
    }),
    a({
      id: 'fragrant-flower', anilistSearch: 'Kaoru Hana wa Rin to Saku',
      title: 'The Fragrant Flower Blooms with Dignity', titleJp: '薫る花は凛と咲く', titleEn: 'The Fragrant Flower Blooms with Dignity', titleVi: 'Hoa Thơm Kiêu Hãnh Nở Rộ',
      era: 'latest', year: 2025, releaseSeason: 'Summer', seasons: 1, episodes: '13 tập (07–09/2025)',
      status: 'completed', statusLabel: 'Hoàn thành 13 tập (09/2025)',
      studio: 'CloverWorks', creator: 'Saka Mikami', director: 'Miyuki Kuroki',
      genres: ['Romance', 'Drama', 'School'], rating: 8.6, popularityRank: 17,
      theme: { primary: '#f472b6', secondary: '#fbbf24', bgTint: '#1f0d19' },
      shortDesc: 'Chàng học sinh vẻ ngoài bặm trợn Rintaro gặp cô tiểu thư ngọt ngào Kaoruko từ hai ngôi trường đối đầu.',
      fullDesc: 'Siêu phẩm lãng mạn học đường năm 2025 của CloverWorks chinh phục người xem bằng sự chân thành và thấu hiểu.',
      related: ['toradora', 'your-lie-in-april', 'my-dress-up-darling']
    }),
    a({
      id: 'bleach-tybw', anilistSearch: 'Bleach: Sennen Kessen-hen',
      title: 'Bleach: Thousand-Year Blood War', titleJp: 'BLEACH 千年血戦篇', titleEn: 'Bleach: TYBW', titleVi: 'Huyết Chiến Ngàn Năm',
      era: 'latest', year: 2022, releaseSeason: 'Fall', seasons: 4, episodes: 'Part 1–3 (40) & Part 4 (Hè 2026)',
      status: 'completed', statusLabel: 'Part 4 The Calamity (2026)',
      studio: 'Pierrot Films', creator: 'Tite Kubo', director: 'Tomohisa Taguchi / Hikaru Murata',
      genres: ['Action', 'Adventure', 'Fantasy', 'Supernatural'], rating: 9.0, popularityRank: 7,
      theme: { primary: '#f97316', secondary: '#38bdf8', bgTint: '#1b0d07' },
      shortDesc: 'Cuộc chiến tối thượng giữa Hộ Đình Thập Tam Đội, Ichigo Kurosaki và đế chế Quincy của Yhwach.',
      fullDesc: 'Hồi kết The Calamity năm 2026 hoàn tất toàn bộ thiên sử thi Huyết Chiến Ngàn Năm với chất lượng đỉnh cao.',
      related: ['bleach', 'naruto-shippuden', 'jujutsu-kaisen']
    }),

    // ==================== HIỆN ĐẠI 2020–2023 (20 BỘ) ====================
    a({
      id: 'jujutsu-kaisen', anilistSearch: 'Jujutsu Kaisen',
      title: 'Jujutsu Kaisen', titleJp: '呪術廻戦', titleEn: 'Jujutsu Kaisen', titleVi: 'Chú Thuật Hồi Chiến',
      era: 'modern', year: 2020, releaseSeason: 'Fall', seasons: 2, episodes: '47 tập (S1–S2)',
      studio: 'MAPPA', creator: 'Gege Akutami', director: 'Sunghoo Park / Shota Goshozono',
      genres: ['Action', 'Drama', 'Supernatural'], rating: 8.7, popularityRank: 3,
      theme: { primary: '#a855f7', secondary: '#ef4444', bgTint: '#170a24' },
      shortDesc: 'Yuji Itadori nuốt ngón tay của Nguyền Vương Sukuna và gia nhập Cao chuyên Chú thuật Tokyo.',
      fullDesc: 'Tượng đài shonen hiện đại của MAPPA với hệ thống Lãnh Địa Bành Trướng, Gojo Satoru và biến cố Shibuya.',
      characters: [
        c('Yuji Itadori', '虎杖悠仁', 'Vật chứa Sukuna', 'Nhân vật chính', 'Nam', 'Nhân hậu, quả cảm', 'Thể chất siêu phàm & Hắc Thiểm', 'Cận chiến chú lực', 'Tôi muốn mọi người có được một cái chết đúng nghĩa.', '#ef4444'),
        c('Megumi Fushiguro', '伏黒恵', 'Thiên tài tộc Zenin', 'Nhân vật chính', 'Nam', 'Trầm tĩnh, lý trí', 'Thập Chủng Ảnh Pháp Thuật', 'Thức thần & Lãnh Địa', 'Tôi cứu người theo lương tâm của chính mình.', '#2563eb'),
        c('Nobara Kugisaki', '釘崎野薔薇', 'Nữ chú thuật sư', 'Nữ chính', 'Nữ', 'Mạnh mẽ, tự tin', 'Sô Linh Chú Pháp', 'Búa & Đinh rơm', 'Tôi yêu bản thân mình khi mình thật ngầu!', '#f97316'),
        c('Gojo Satoru', '五条悟', 'Mạnh Nhất Thời Đại', 'Thầy giáo Đặc Cấp', 'Nam', 'Ngạo nghễ, bảo vệ thế hệ trẻ', 'Lục Nhãn & Vô Hạ Hạn', 'Vô Lượng Không Xứ', 'Trên trời dưới đất, chỉ mình ta là tối tôn.', '#38bdf8'),
        c('Ryomen Sukuna', '両面宿儺', 'Vua Lời Nguyền', 'Phản diện tối cao', 'Nam', 'Tàn bạo, ngạo mạn', 'Ngự Trù Tử & Phục Ma Ngự Trù Tử', 'Nhát chém Giải / Bát', 'Biết vị trí của ngươi đi, kẻ ngu xuẩn.', '#dc2626'),
        c('Yuta Okkotsu', '乙骨憂太', 'Đặc Cấp Chiêu Hồn', 'Đàn anh năm 2', 'Nam', 'Dịu dàng nhưng áp đảo', 'Sao chép thuật thức & Rika', 'Katana chú cụ', 'Chẳng có gì xấu xa khi muốn được sống tiếp.', '#60a5fa'),
        c('Maki Zenin', '禪院真希', 'Chiến binh chú cụ', 'Đàn chị năm 2', 'Nữ', 'Kiên cường, bất khuất', 'Thiên Dữ Chú Phược', 'Thương Du Vân', 'Tôi sẽ khiến cả gia tộc phải hối hận.', '#10b981'),
        c('Toji Fushiguro', '伏黒甚爾', 'Sát Thủ Chú Thuật Sư', 'Phản diện quá khứ', 'Nam', 'Thực dụng, tự do', 'Thiên Dữ Chú Phược hoàn hảo', 'Thiên Nghịch Mâu', 'Không chú lực vẫn đủ nghiền nát giới chú thuật.', '#64748b'),
        c('Suguru Geto', '夏油傑', 'Cựu bạn thân Gojo', 'Phản diện quá khứ', 'Nam', 'Cực đoan vì lý tưởng', 'Chú Linh Thao Thuật', 'Hàng nghìn chú linh', 'Chúng ta là những kẻ mạnh nhất mà, Satoru.', '#a855f7'),
        c('Choso', '脹相', 'Anh Cả Cửu Tướng Đồ', 'Nhân vật then chốt', 'Nam', 'Thương yêu các em vô điều kiện', 'Xích Huyết Thao Thuật', 'Máu nén xuyên phá', 'Người anh phải đi đầu bảo vệ các em.', '#991b1b')
      ],
      related: ['jujutsu-kaisen-s3', 'chainsaw-man', 'demon-slayer']
    }),
    a({
      id: 'demon-slayer', anilistSearch: 'Kimetsu no Yaiba',
      title: 'Demon Slayer: Kimetsu no Yaiba', titleJp: '鬼滅の刃', titleEn: 'Demon Slayer', titleVi: 'Thanh Gươm Diệt Quỷ',
      era: 'modern', year: 2019, releaseSeason: 'Spring', seasons: 4, episodes: '63 tập + Mugen Train',
      studio: 'ufotable', creator: 'Koyoharu Gotouge', director: 'Haruo Sotozaki',
      genres: ['Action', 'Adventure', 'Fantasy', 'Drama'], rating: 8.7, popularityRank: 1,
      theme: { primary: '#e11d48', secondary: '#10b981', bgTint: '#1f0810' },
      shortDesc: 'Tanjiro Kamado gia nhập Sát Quỷ Đoàn tìm cách biến em gái Nezuko trở lại làm người.',
      fullDesc: 'Siêu phẩm ufotable với kỹ thuật hoạt họa Hơi Thở mãn nhãn qua Chuyến Tàu Vô Tận, Kỹ Viện Trấn, Làng Thợ Rèn và Đại Trụ Đặc Huấn.',
      characters: [
        c('Tanjiro Kamado', '竈門炭治郎', 'Kiếm sĩ Hỏa Thần', 'Nhân vật chính', 'Nam', 'Ấm áp, kiên cường', 'Hơi Thở Nước & Mặt Trời', 'Kiếm Nhật Luân đen', 'Hãy giữ ngọn lửa trong tim luôn rực cháy!', '#10b981'),
        c('Nezuko Kamado', '竈門禰豆子', 'Quỷ thiện lương', 'Nữ chính', 'Nữ', 'Bảo vệ anh trai và con người', 'Bộc Huyết', 'Thể thuật quỷ', 'Mmm-hmm!', '#ec4899'),
        c('Zenitsu Agatsuma', '我妻善逸', 'Tia chớp vàng', 'Đồng đội', 'Nam', 'Đạt tốc độ âm thanh khi ngủ', 'Hơi Thở Sấm Sét', 'Kiếm tia chớp', 'Hãy rèn giũa một chiêu duy nhất tới hoàn mỹ!', '#facc15'),
        c('Inosuke Hashibira', '嘴平伊之助', 'Chàng đầu heo', 'Đồng đội', 'Nam', 'Hoang dã, hiếu chiến', 'Hơi Thở Thú Hoang', 'Song kiếm răng cưa', 'Heo rừng đột kích!', '#38bdf8'),
        c('Giyu Tomioka', '冨岡義勇', 'Thủy Trụ', 'Trụ Cột', 'Nam', 'Trầm lặng, chính trực', 'Hơi Thở Của Nước', 'Kiếm xanh thẫm', 'Đừng để kẻ khác quyết định quyền sống của mình.', '#2563eb'),
        c('Shinobu Kocho', '胡蝶しのぶ', 'Trùng Trụ', 'Trụ Cột', 'Nữ', 'Dịu dàng, thông minh', 'Hơi Thở Côn Trùng', 'Kiếm độc tử đằng', 'Liệu quỷ và người có thể làm bạn?', '#a855f7'),
        c('Kyojuro Rengoku', '煉獄杏寿郎', 'Viêm Trụ', 'Trụ Cột', 'Nam', 'Hào sảng, nhiệt huyết', 'Hơi Thở Của Lửa', 'Kiếm lửa', 'Hãy đốt cháy trái tim mình lên!', '#f97316'),
        c('Muichiro Tokito', '時透無一郎', 'Hà Trụ', 'Trụ Cột', 'Nam', 'Thần đồng cầm kiếm sau 2 tháng', 'Hơi Thở Sương Mù', 'Kiếm trắng', 'Cơ thể ta vẫn nhớ cách bảo vệ người khác.', '#2dd4bf'),
        c('Mitsuri Kanroji', '甘露寺蜜璃', 'Luyến Trụ', 'Trụ Cột', 'Nữ', 'Tràn đầy tình yêu thương', 'Hơi Thở Tình Yêu', 'Kiếm roi dẻo', 'Mọi người ở Sát Quỷ Đoàn đều thật đáng quý!', '#f472b6'),
        c('Akaza', '猗窩座', 'Thượng Huyền Tam', 'Phản diện biểu tượng', 'Nam', 'Ám ảnh sức mạnh võ đạo', 'Phá Hoại Sát', 'Võ thuật Soryu', 'Hãy cùng ta chiến đấu mãi mãi!', '#f43f5e')
      ],
      related: ['demon-slayer-infinity-castle', 'jujutsu-kaisen', 'bleach-tybw']
    }),
    a({
      id: 'attack-on-titan', anilistSearch: 'Shingeki no Kyojin',
      title: 'Attack on Titan', titleJp: '進撃の巨人', titleEn: 'Attack on Titan', titleVi: 'Đại Chiến Titan',
      era: 'modern', year: 2013, releaseSeason: 'Spring', seasons: 4, episodes: '94 tập + Final Chapters',
      studio: 'WIT STUDIO / MAPPA', creator: 'Hajime Isayama', director: 'Tetsuro Araki / Yuichiro Hayashi',
      genres: ['Action', 'Drama', 'Mystery', 'Fantasy'], rating: 9.1, popularityRank: 2,
      theme: { primary: '#b91c1c', secondary: '#fbbf24', bgTint: '#1a0a0a' },
      shortDesc: 'Nhân loại sau những bức tường chiến đấu chống Titan trước khi khám phá sự thật rúng động về thế giới.',
      fullDesc: 'Sử thi vĩ đại chuyển mình từ sinh tồn đẫm máu thành bi kịch chiến tranh, tự do và vòng xoáy hận thù.',
      characters: [
        c('Eren Yeager', 'エレン・イェーガー', 'Titan Tiến Công', 'Nhân vật chính', 'Nam', 'Khát khao tự do cực đoan', 'Titan Tiến Công & Thủy Tổ', 'Bộ cơ động 3D', 'Nếu có kẻ cướp tự do của ta, ta sẽ cướp lại.', '#dc2626'),
        c('Mikasa Ackerman', 'ミカサ・アッカーマン', 'Chiến thần Ackerman', 'Nữ chính', 'Nữ', 'Ít nói, vô đối chiến trường', 'Huyết thống Ackerman', 'Song kiếm', 'Thế giới này thật tàn nhẫn... nhưng thật tươi đẹp.', '#ef4444'),
        c('Armin Arlert', 'アルミン・アルレルト', 'Quân sư Trinh Sát', 'Nhân vật chính', 'Nam', 'Thông minh, nhân bản', 'Titan Đại Hình', 'Chiến lược', 'Kẻ không từ bỏ được gì chẳng thể thay đổi gì.', '#facc15'),
        c('Levi Ackerman', 'リヴァイ・アッカーマン', 'Mạnh Nhất Nhân Loại', 'Đội trưởng', 'Nam', 'Lạnh lùng, mang nỗi đau đồng đội', 'Bộ cơ động 3D đỉnh cao', 'Song đao xoay', 'Hãy chọn điều mà bản thân ít hối tiếc nhất.', '#10b981'),
        c('Erwin Smith', 'エルヴィン・スミス', 'Đoàn trưởng 13', 'Chỉ huy', 'Nam', 'Tầm nhìn vĩ đại', 'Diễn thuyết & chiến lược', 'Chiến thuật hy sinh', 'Shinzo wo Sasageyo!', '#38bdf8'),
        c('Hange Zoe', 'ハンジ・ゾエ', 'Đoàn trưởng 14', 'Nhà khoa học', 'Khác', 'Đam mê nghiên cứu Titan', 'Thương Sấm Sét', 'Thiết bị nghiên cứu', 'Titan thật kỳ diệu biết bao!', '#f59e0b'),
        c('Reiner Braun', 'ライナー・ブラウン', 'Titan Thiết Giáp', 'Chiến binh Marley', 'Nam', 'Giằng xé nội tâm', 'Giáp bất khả xâm phạm', 'Titan Thiết Giáp', 'Tôi chỉ muốn làm một anh hùng.', '#94a3b8'),
        c('Annie Leonhart', 'アニ・レオンハート', 'Titan Nữ Hình', 'Chiến binh Marley', 'Nữ', 'Lạnh lùng, thực tế', 'Võ thuật & pha lê', 'Titan Nữ Hình', 'Tôi chưa từng xem mình là người tốt.', '#60a5fa'),
        c('Jean Kirstein', 'ジャン・キルシュタイン', 'Lãnh đạo thực tế', 'Chiến binh', 'Nam', 'Thẳng thắn, trung thành', 'Chỉ huy đội hình', 'Bộ cơ động 3D', 'Đống tro tàn vẫn đang nhìn chúng ta.', '#a855f7'),
        c('Historia Reiss', 'ヒストリア・レイス', 'Nữ Hoàng Paradis', 'Nữ hoàng', 'Nữ', 'Vươn lên làm chủ vận mệnh', 'Quyền lực hoàng gia', 'Vương miện Reiss', 'Tôi sẽ sống vì chính bản thân mình!', '#ec4899')
      ],
      related: ['vinland-saga', 'code-geass', 'kaiju-no-8']
    }),
    a({
      id: 'chainsaw-man', anilistSearch: 'Chainsaw Man',
      title: 'Chainsaw Man', titleJp: 'チェンソーマン', titleEn: 'Chainsaw Man', titleVi: 'Người Cưa',
      era: 'modern', year: 2022, releaseSeason: 'Fall', seasons: 1, episodes: '12 tập + Movie Reze Arc (2025)',
      studio: 'MAPPA', creator: 'Tatsuki Fujimoto', director: 'Ryu Nakayama',
      genres: ['Action', 'Horror', 'Supernatural', 'Drama'], rating: 8.5, popularityRank: 6,
      theme: { primary: '#ef4444', secondary: '#facc15', bgTint: '#210909' },
      shortDesc: 'Cậu thiếu niên nghèo Denji hợp thể với quỷ cưa Pochita và gia nhập Cục Thợ Săn Quỷ Công An.',
      fullDesc: 'Phong cách điện ảnh gai góc của MAPPA tiếp tục bùng nổ với Movie Reze Arc năm 2025.',
      related: ['jujutsu-kaisen', 'dandadan', 'hell-paradise']
    }),
    a({
      id: 'spy-x-family', anilistSearch: 'SPY x FAMILY',
      title: 'SPY x FAMILY', titleJp: 'SPY×FAMILY', titleEn: 'SPY x FAMILY', titleVi: 'Gia Đình Điệp Viên',
      era: 'modern', year: 2022, releaseSeason: 'Spring', seasons: 3, episodes: '50 tập (S1–S3 đến 2025)',
      studio: 'WIT STUDIO x CloverWorks', creator: 'Tatsuya Endo', director: 'Kazuhiro Furuhashi',
      genres: ['Action', 'Comedy', 'Drama'], rating: 8.5, popularityRank: 13,
      theme: { primary: '#10b981', secondary: '#ec4899', bgTint: '#0c1c16' },
      shortDesc: 'Điệp viên Twilight, sát thủ Yor và cô bé đọc suy nghĩ Anya lập gia đình giả giữ hòa bình thế giới.',
      fullDesc: 'Bộ phim gia đình quốc dân qua 3 mùa phát sóng đến cuối 2025.',
      related: ['sakamoto-days', 'dandadan', 'toradora']
    }),
    a({
      id: 'bocchi-the-rock', anilistSearch: 'Bocchi the Rock!',
      title: 'Bocchi the Rock!', titleJp: 'ぼっち・ざ・ろっく！', titleEn: 'Bocchi the Rock!', titleVi: 'Cô Bé Hướng Nội Chơi Rock',
      era: 'modern', year: 2022, releaseSeason: 'Fall', seasons: 1, episodes: '12 tập',
      studio: 'CloverWorks', creator: 'Aki Hamaji', director: 'Keiichiro Saito',
      genres: ['Comedy', 'Drama', 'School'], rating: 8.8, popularityRank: 14,
      theme: { primary: '#ec4899', secondary: '#facc15', bgTint: '#220b1a' },
      shortDesc: 'Cô nàng hướng nội Hitori Gotoh tìm thấy ánh sáng tuổi trẻ cùng ban nhạc Kessoku Band.',
      fullDesc: 'Hiện tượng văn hóa CloverWorks với phong cách hài hước siêu sáng tạo và album nhạc Kessoku Band đình đám.',
      related: ['oshi-no-ko', 'your-lie-in-april', 'fragrant-flower']
    }),
    a({
      id: 'cyberpunk-edgerunners', anilistSearch: 'Cyberpunk: Edgerunners',
      title: 'Cyberpunk: Edgerunners', titleJp: 'サイバーパンク エッジランナーズ', titleEn: 'Cyberpunk: Edgerunners', titleVi: 'Chiến Binh Mạng Night City',
      era: 'modern', year: 2022, releaseSeason: 'Fall', seasons: 1, episodes: '10 tập',
      studio: 'Trigger', creator: 'CD Projekt Red / Studio Trigger', director: 'Hiroyuki Imaishi',
      genres: ['Action', 'Sci-Fi', 'Drama'], rating: 8.6, popularityRank: 11,
      theme: { primary: '#facc15', secondary: '#ec4899', bgTint: '#1f1906' },
      shortDesc: 'David Martinez cấy ghép Sandevistan giữa Night City tàn khốc để bảo vệ ước mơ lên Mặt Trăng của Lucy.',
      fullDesc: 'Bi kịch neon rực rỡ và ám ảnh nhất thập kỷ từ Studio Trigger.',
      related: ['lazarus', 'cowboy-bebop', 'akira']
    }),
    a({
      id: 'vinland-saga', anilistSearch: 'Vinland Saga',
      title: 'Vinland Saga', titleJp: 'ヴィンランド・サガ', titleEn: 'Vinland Saga', titleVi: 'Bản Trường Ca Vinland',
      era: 'modern', year: 2019, releaseSeason: 'Summer', seasons: 2, episodes: '48 tập',
      studio: 'WIT STUDIO / MAPPA', creator: 'Makoto Yukimura', director: 'Shuhei Yabuta',
      genres: ['Action', 'Adventure', 'Drama'], rating: 8.9, popularityRank: 9,
      theme: { primary: '#f59e0b', secondary: '#38bdf8', bgTint: '#1c1308' },
      shortDesc: 'Thorfinn từ cậu bé Viking báo thù trở thành người tìm kiếm vùng đất hòa bình Vinland.',
      fullDesc: 'Kiệt tác lịch sử - triết lý với câu thoại bất hủ "Con không có kẻ thù nào cả".',
      related: ['orb-earth', 'attack-on-titan', 'monster']
    }),
    a({
      id: 'mushoku-tensei', anilistSearch: 'Mushoku Tensei',
      title: 'Mushoku Tensei', titleJp: '無職転生', titleEn: 'Mushoku Tensei: Jobless Reincarnation', titleVi: 'Thất Nghiệp Chuyển Sinh',
      era: 'modern', year: 2021, releaseSeason: 'Winter', seasons: 2, episodes: '48 tập',
      studio: 'Studio Bind', creator: 'Rifujin na Magonote', director: 'Manabu Okamoto',
      genres: ['Adventure', 'Drama', 'Fantasy'], rating: 8.6, popularityRank: 12,
      theme: { primary: '#10b981', secondary: '#f59e0b', bgTint: '#091a12' },
      shortDesc: 'Rudeus Greyrat đầu thai vào thế giới kiếm và ma pháp với quyết tâm sống một đời không hối tiếc.',
      fullDesc: 'Chuẩn mực chuyển sinh thế giới khác nhờ thế giới quan đồ sộ và hoạt họa điện ảnh.',
      related: ['re-zero', 'frieren', 'eminence-in-shadow']
    }),
    a({
      id: 'eminence-in-shadow', anilistSearch: 'Kage no Jitsuryokusha ni Naritakute!',
      title: 'The Eminence in Shadow', titleJp: '陰の実力者になりたくて！', titleEn: 'The Eminence in Shadow', titleVi: 'Chúa Tể Bóng Tối',
      era: 'modern', year: 2022, releaseSeason: 'Fall', seasons: 2, episodes: '32 tập',
      studio: 'Nexus', creator: 'Daisuke Aizawa', director: 'Kazuya Nakanishi',
      genres: ['Action', 'Comedy', 'Fantasy'], rating: 8.3, popularityRank: 16,
      theme: { primary: '#7c3aed', secondary: '#ef4444', bgTint: '#130724' },
      shortDesc: 'Cid điều hành tổ chức Shadow Garden cực ngầu dù cậu tưởng mọi âm mưu chỉ là diễn kịch.',
      fullDesc: 'Hài kịch hành động châm biếm isekai đỉnh cao với thương hiệu "I Am Atomic".',
      related: ['mushoku-tensei', 're-zero', 'code-geass']
    }),
    a({
      id: 'lycoris-recoil', anilistSearch: 'Lycoris Recoil',
      title: 'Lycoris Recoil', titleJp: 'リコリス・リコイル', titleEn: 'Lycoris Recoil', titleVi: 'Quán Cà Phê Điệp Viên',
      era: 'modern', year: 2022, releaseSeason: 'Summer', seasons: 1, episodes: '13 tập + 6 tập ngắn',
      studio: 'A-1 Pictures', creator: 'Spider Lily / Asaura', director: 'Shingo Adachi',
      genres: ['Action', 'Comedy', 'Drama'], rating: 8.2, popularityRank: 23,
      theme: { primary: '#ef4444', secondary: '#38bdf8', bgTint: '#210a10' },
      shortDesc: 'Chisato và Takina bảo vệ yên bình Tokyo từ quán cà phê truyền thống LycoReco.',
      fullDesc: 'Anime gốc cực ăn khách của A-1 Pictures với những màn đấu súng cận chiến mãn nhãn.',
      related: ['spy-x-family', 'bocchi-the-rock', 'lazarus']
    }),
    a({
      id: 'ranking-of-kings', anilistSearch: 'Ousama Ranking',
      title: 'Ranking of Kings', titleJp: '王様ランキング', titleEn: 'Ranking of Kings', titleVi: 'Bảng Xếp Hạng Đức Vua',
      era: 'modern', year: 2021, releaseSeason: 'Fall', seasons: 2, episodes: '33 tập',
      studio: 'WIT STUDIO', creator: 'Sosuke Toka', director: 'Yosuke Hatta',
      genres: ['Adventure', 'Fantasy', 'Drama'], rating: 8.6, popularityRank: 21,
      theme: { primary: '#facc15', secondary: '#38bdf8', bgTint: '#1a1507' },
      shortDesc: 'Hoàng tử tí hon khiếm thính Bojji cùng người bạn bóng ma Kage vươn lên chứng minh tư chất quân vương.',
      fullDesc: 'Nét vẽ cổ tích ẩn chứa câu chuyện trưởng thành sâu sắc và những pha đấu kiếm xuất thần.',
      related: ['frieren', 'witch-hat-atelier', 'vinland-saga']
    }),
    a({
      id: 'summertime-rendering', anilistSearch: 'Summertime Render',
      title: 'Summer Time Rendering', titleJp: 'サマータイムレンダ', titleEn: 'Summer Time Rendering', titleVi: 'Vòng Lặp Mùa Hè',
      era: 'modern', year: 2022, releaseSeason: 'Spring', seasons: 1, episodes: '25 tập',
      studio: 'OLM', creator: 'Yasuki Tanaka', director: 'Ayumu Watanabe',
      genres: ['Mystery', 'Sci-Fi', 'Supernatural', 'Horror'], rating: 8.5, popularityRank: 22,
      theme: { primary: '#38bdf8', secondary: '#f43f5e', bgTint: '#091524' },
      shortDesc: 'Trở về đảo Hitogashima dự đám tang bạn thân, Shinpei bị cuốn vào vòng lặp thời gian và thế lực Bóng Đen.',
      fullDesc: '25 tập kịch tính nghẹt thở không một chi tiết thừa, đấu trí từng giây với kẻ thù thông minh.',
      related: ['steins-gate', 're-zero', 'summer-hikaru-died']
    }),
    a({
      id: 'hell-paradise', anilistSearch: 'Jigokuraku',
      title: 'Hell\'s Paradise', titleJp: '地獄楽', titleEn: 'Hell\'s Paradise', titleVi: 'Địa Ngục Cực Lạc',
      era: 'modern', year: 2023, releaseSeason: 'Spring', seasons: 2, episodes: '25 tập (S1: 13, S2 2026: 12)',
      studio: 'MAPPA', creator: 'Yuji Kaku', director: 'Kaori Makita',
      genres: ['Action', 'Adventure', 'Fantasy', 'Supernatural'], rating: 8.2, popularityRank: 20,
      theme: { primary: '#e11d48', secondary: '#10b981', bgTint: '#1f0813' },
      shortDesc: 'Nhẫn giả tử tù Gabimaru và đao phủ Sagiri đặt chân lên đảo quái dị Shinsenkyo tìm Tiên Đan Bất Tử.',
      fullDesc: 'Tiếp nối Mùa 1 năm 2023, Mùa 2 hoàn thành đầu năm 2026 đẩy cao trào cuộc chiến chống các Thiên Tiên.',
      related: ['chainsaw-man', 'jujutsu-kaisen', 'demon-slayer']
    }),
    a({
      id: 'heavenly-delusion', anilistSearch: 'Tengoku Daimakyou',
      title: 'Heavenly Delusion', titleJp: '天国大魔境', titleEn: 'Heavenly Delusion', titleVi: 'Ảo Ảnh Thiên Đường',
      era: 'modern', year: 2023, releaseSeason: 'Spring', seasons: 1, episodes: '13 tập',
      studio: 'Production I.G', creator: 'Masakazu Ishiguro', director: 'Hirotaka Mori',
      genres: ['Adventure', 'Mystery', 'Sci-Fi'], rating: 8.2, popularityRank: 31,
      theme: { primary: '#06b6d4', secondary: '#f59e0b', bgTint: '#09161c' },
      shortDesc: 'Maru và Kiruko băng qua Nhật Bản hậu tận thế đi tìm "Thiên Đường" song song với bí ẩn những đứa trẻ sau bức tường.',
      fullDesc: 'Tác phẩm khoa học viễn tưởng bí ẩn xuất sắc bậc nhất 2023 với cấu trúc kể chuyện đan xen tài tình.',
      related: ['summertime-rendering', 'steins-gate', 'attack-on-titan']
    }),
    a({
      id: 'my-dress-up-darling', anilistSearch: 'Sono Bisque Doll wa Koi wo Suru',
      title: 'My Dress-Up Darling', titleJp: 'その着せ替え人形は恋をする', titleEn: 'My Dress-Up Darling', titleVi: 'Nàng Nổi Loạn X Chàng Thợ May',
      era: 'modern', year: 2022, releaseSeason: 'Winter', seasons: 2, episodes: 'S1 (12) + S2 (12, Summer 2025)',
      studio: 'CloverWorks', creator: 'Shinichi Fukuda', director: 'Keisuke Shinohara',
      genres: ['Comedy', 'Romance', 'School'], rating: 8.2, popularityRank: 18,
      theme: { primary: '#ec4899', secondary: '#38bdf8', bgTint: '#210b1c' },
      shortDesc: 'Chàng trai mê búp bê Hina Wakana Gojo hợp tác may trang phục cosplay cho cô nàng rạng rỡ Marin Kitagawa.',
      fullDesc: 'CloverWorks tiếp tục phát sóng Mùa 2 vào Hè 2025, tôn vinh đam mê thủ công và tình cảm chân thành.',
      related: ['fragrant-flower', 'toradora', 'bocchi-the-rock']
    }),
    a({
      id: 'wind-breaker', anilistSearch: 'WIND BREAKER',
      title: 'WIND BREAKER', titleJp: 'WIND BREAKER', titleEn: 'WIND BREAKER', titleVi: 'Người Chắn Gió',
      era: 'modern', year: 2024, releaseSeason: 'Spring', seasons: 2, episodes: '25 tập (2024–2025)',
      studio: 'CloverWorks', creator: 'Satoru Nii', director: 'Toshifumi Akai',
      genres: ['Action', 'School', 'Drama'], rating: 8.0, popularityRank: 22,
      theme: { primary: '#10b981', secondary: '#38bdf8', bgTint: '#061914' },
      shortDesc: 'Haruka Sakura gia nhập trường Furin và cùng đội Bofurin bảo vệ thị trấn bằng nắm đấm danh dự.',
      fullDesc: 'Mùa 1 (2024) và Mùa 2 (2025) nổi bật với vũ đạo cận chiến đẹp mắt và thông điệp chữa lành tổn thương.',
      related: ['haikyuu', 'blue-lock', 'jujutsu-kaisen']
    }),
    a({
      id: 'kaguya-sama', anilistSearch: 'Kaguya-sama wa Kokurasetai',
      title: 'Kaguya-sama: Love Is War', titleJp: 'かぐや様は告らせたい', titleEn: 'Kaguya-sama: Love Is War', titleVi: 'Cuộc Chiến Tỏ Tình',
      era: 'modern', year: 2019, releaseSeason: 'Winter', seasons: 3, episodes: '37 tập + Movie',
      studio: 'A-1 Pictures', creator: 'Aka Akasaka', director: 'Mamoru Hatakeyama',
      genres: ['Comedy', 'Romance', 'School'], rating: 8.9, popularityRank: 8,
      theme: { primary: '#ef4444', secondary: '#facc15', bgTint: '#22090e' },
      shortDesc: 'Hai thiên tài Hội Học Sinh Kaguya và Shirogane đấu trí từng giây để ép đối phương tỏ tình trước.',
      fullDesc: 'Đỉnh cao rom-com học đường với nhịp dựng phim thiên tài và màn pháo hoa Ultra Romantic.',
      related: ['toradora', 'spy-x-family', 'oshi-no-ko']
    }),
    a({
      id: 'mob-psycho', anilistSearch: 'Mob Psycho 100',
      title: 'Mob Psycho 100', titleJp: 'モブサイコ100', titleEn: 'Mob Psycho 100', titleVi: 'Cậu Bé Siêu Năng Lực',
      era: 'modern', year: 2016, releaseSeason: 'Summer', seasons: 3, episodes: '37 tập',
      studio: 'Bones', creator: 'ONE', director: 'Yuzuru Tachikawa',
      genres: ['Action', 'Comedy', 'Supernatural', 'Drama'], rating: 8.8, popularityRank: 15,
      theme: { primary: '#a855f7', secondary: '#38bdf8', bgTint: '#160926' },
      shortDesc: 'Shigeo "Mob" Kageyama sở hữu siêu năng lực hủy diệt nhưng chỉ muốn trưởng thành như một cậu bé bình thường.',
      fullDesc: 'Kiệt tác trọn vẹn 3 mùa của Bones về giá trị bản thân, tình thầy trò với Reigen và hoạt họa đỉnh cao.',
      related: ['dandadan', 'jujutsu-kaisen', 'one-punch-man']
    }),

    // ==================== KINH ĐIỂN & HUYỀN THOẠI (26 BỘ) ====================
    a({
      id: 'dragon-ball-super', anilistSearch: 'Dragon Ball Z',
      title: 'Dragon Ball Z / Dragon Ball Super', titleJp: 'ドラゴンボールZ / 超', titleEn: 'Dragon Ball Z / Super', titleVi: 'Bảy Viên Ngọc Rồng',
      era: 'classic', year: 1989, releaseSeason: 'Spring', seasons: 2, episodes: '291 tập (DBZ) + 131 tập (DBS)',
      studio: 'Toei Animation', creator: 'Akira Toriyama', director: 'Daisuke Nishio',
      genres: ['Action', 'Adventure', 'Fantasy', 'Comedy'], rating: 8.5, popularityRank: 4,
      theme: { primary: '#f97316', secondary: '#38bdf8', bgTint: '#211106' },
      shortDesc: 'Son Goku và các chiến binh Z bảo vệ Trái Đất và đa vũ trụ trước Frieza, Cell, Majin Buu tới Giải Đấu Sức Mạnh.',
      fullDesc: 'Biểu tượng văn hóa đại chúng toàn cầu khai sinh hàng loạt chuẩn mực shonen hiện đại từ Super Saiyan đến Bản Năng Vô Cực.',
      characters: [
        c('Son Goku', '孫悟空', 'Kakarot', 'Nhân vật chính', 'Nam', 'Lạc quan, mê võ đạo', 'Super Saiyan & Bản Năng Vô Cực', 'Gậy Như Ý / Kamehameha', 'Tôi đang háo hức lắm rồi đây!', '#f97316'),
        c('Vegeta', 'ベジータ', 'Hoàng tử Saiyan', 'Đối thủ / Đồng đội', 'Nam', 'Kiêu hãnh, yêu gia đình', 'Super Saiyan Blue & Bản Ngã Tối Thượng', 'Final Flash', 'Kiêu hãnh của chiến binh Saiyan không bao giờ gục ngã!', '#3b82f6'),
        c('Son Gohan', '孫悟飯', 'Chiến binh học giả', 'Con trai Goku', 'Nam', 'Nhân hậu, tiềm năng vô hạn', 'Gohan Beast', 'Masenko', 'Tôi chiến đấu để bảo vệ mọi người.', '#a855f7'),
        c('Piccolo', 'ピッコロ', 'Đại Ma Vương cải tà', 'Sư phụ / Chiến binh Namek', 'Nam', 'Điềm tĩnh, mưu lược', 'Orange Piccolo', 'Ma Quán Quang Sát Pháo', 'Hãy né ra, Gohan!', '#10b981'),
        c('Future Trunks', 'トランクス', 'Chiến binh tương lai', 'Đồng minh', 'Nam', 'Nghiêm túc, quyết đoán', 'Super Saiyan Rage', 'Thanh kiếm của Trunks', 'Tôi nhất định bảo vệ dòng thời gian này.', '#60a5fa'),
        c('Frieza', 'フリーザ', 'Hoàng Đế Vũ Trụ', 'Phản diện huyền thoại', 'Nam', 'Tàn nhẫn, kiêu ngạo', 'Golden & Black Frieza', 'Tia tử thần', 'Ta là kẻ thống trị tối cao của vũ trụ!', '#9333ea'),
        c('Beerus', 'ビルス', 'Thần Hủy Diệt', 'Thần Vũ Trụ 7', 'Nam', 'Thích ngủ và đồ ăn ngon', 'Hakai Hủy Diệt', 'Năng lượng hủy diệt', 'Đừng làm mất hứng thưởng thức món ngon của ta.', '#ec4899'),
        c('Whis', 'ウイス', 'Thiên Sứ', 'Sư phụ Beerus & Goku', 'Nam', 'Điềm đạm, quyền năng vượt trội', 'Bản Năng Vô Cực & tua ngược thời gian', 'Trượng thiên sứ', 'Tâm trí bình thản mới đạt tới cực cảnh.', '#06b6d4')
      ],
      related: ['naruto-shippuden', 'one-piece', 'bleach']
    }),
    a({
      id: 'naruto-shippuden', anilistSearch: 'Naruto: Shippuuden',
      title: 'Naruto / Naruto Shippuden', titleJp: 'ナルト 疾風伝', titleEn: 'Naruto Shippuden', titleVi: 'Naruto – Đệ Thất Hokage',
      era: 'classic', year: 2002, releaseSeason: 'Fall', seasons: 2, episodes: '720 tập (220 + 500)',
      studio: 'Pierrot', creator: 'Masashi Kishimoto', director: 'Hayato Date',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy'], rating: 8.7, popularityRank: 3,
      theme: { primary: '#f97316', secondary: '#ef4444', bgTint: '#210f06' },
      shortDesc: 'Cậu nhóc mang Cửu Vĩ Naruto Uzumaki vượt qua cô độc để trở thành Hokage được cả làng công nhận.',
      fullDesc: 'Thiên sử thi nhẫn giả gắn liền tuổi thơ nhiều thế hệ với những trận chiến huyền thoại cùng Sasuke, Kakashi, Itachi và Akatsuki.',
      characters: [
        c('Naruto Uzumaki', 'うずまきナルト', 'Anh hùng Làng Lá', 'Nhân vật chính', 'Nam', 'Kiên cường, không bỏ rơi đồng đội', 'Cửu Vĩ Kurama & Hiền Nhân Thuật', 'Rasengan / Bom Vĩ Thú', 'Đó chính là Nhẫn Đạo của tôi!', '#f97316'),
        c('Sasuke Uchiha', 'うちはサスケ', 'Hokage Bóng Tối', 'Nhân vật chính / Đối thủ', 'Nam', 'Lạnh lùng, mang vết thương gia tộc', 'Sharingan & Rinnegan', 'Kiếm Kusanagi / Chidori', 'Ta sẽ cắt đứt mọi xiềng xích quá khứ.', '#3b82f6'),
        c('Sakura Haruno', '春野サクラ', 'Nữ y nhẫn kiệt xuất', 'Nữ chính', 'Nữ', 'Mạnh mẽ, kiên định', 'Bách Hào Thuật & y thuật tối cao', 'Cú đấm phá đất', 'Lần này hãy nhìn tấm lưng của tôi đi!', '#ec4899'),
        c('Kakashi Hatake', 'はたけカカシ', 'Ninja Sao Chép', 'Đội trưởng Đội 7', 'Nam', 'Điềm đạm, trí tuệ', '1000 Nhẫn Thuật & Lôi Thiết', 'Raikiri', 'Kẻ bỏ rơi đồng đội còn tệ hơn rác rưởi.', '#94a3b8'),
        c('Itachi Uchiha', 'うちはイタチ', 'Anh hùng trong bóng tối', 'Nhân vật bi kịch', 'Nam', 'Trầm lặng, hy sinh tất cả vì hòa bình', 'Tsukuyomi, Amaterasu & Susanoo', 'Gươm Totsuka', 'Xin lỗi Sasuke... đây là lần cuối cùng.', '#dc2626'),
        c('Madara Uchiha', 'うちはマダラ', 'Huyền thoại Uchiha', 'Phản diện tối cao', 'Nam', 'Kiêu hãnh, sức mạnh áp đảo', 'Susanoo Toàn Thân & Lục Đạo', 'Quạt Gunbai', 'Ngươi có muốn phân thân của ta dùng Susanoo không?', '#991b1b'),
        c('Minato Namikaze', '波風ミナト', 'Tia Chớp Vàng Konoha', 'Hokage Đệ Tứ', 'Nam', 'Dịu dàng, phản xạ nhanh nhất thế giới', 'Phi Lôi Thần Thuật', 'Kunai Phi Lôi Thần', 'Cha luôn tin tưởng ở con, Naruto.', '#facc15'),
        c('Hinata Hyuga', '日向ヒナタ', 'Công chúa Bạch Nhãn', 'Nữ chính', 'Nữ', 'Dịu dàng nhưng quả cảm vì người thương', 'Bạch Nhãn & Nhu Quyền Song Sư', 'Song Sư Quyền', 'Vì tôi yêu cậu, Naruto-kun!', '#a855f7'),
        c('Obito Uchiha', 'うちはオビト', 'Tobi', 'Phản diện bi kịch', 'Nam', 'Từng ấm áp trước khi sụp đổ vì mất Rin', 'Kamui dịch chuyển không gian', 'Mặt nạ xoáy', 'Trong thế giới nhẫn giả, ta từng chỉ muốn bảo vệ bạn bè.', '#64748b'),
        c('Gaara', '我愛羅', 'Kazekage Đệ Ngũ', 'Đồng minh / Lãnh đạo', 'Nam', 'Từ cô độc chuyển hóa thành vị lãnh đạo nhân ái', 'Thao túng cát tuyệt đối', 'Hồ lô cát', 'Chính Naruto đã kéo ta ra khỏi bóng tối.', '#10b981')
      ],
      related: ['one-piece', 'bleach', 'hunter-x-hunter']
    }),
    a({
      id: 'one-piece', anilistSearch: 'One Piece',
      title: 'One Piece', titleJp: 'ワンピース', titleEn: 'One Piece', titleVi: 'Đảo Hải Tặc',
      era: 'classic', year: 1999, releaseSeason: 'Fall', seasons: 1, episodes: '1100+ tập (Đang phát sóng)',
      status: 'airing', statusLabel: 'Đang phát sóng',
      studio: 'Toei Animation', creator: 'Eiichiro Oda', director: 'Konosuke Uda / Tatsuya Nagamine',
      genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'], rating: 8.9, popularityRank: 1,
      theme: { primary: '#ef4444', secondary: '#facc15', bgTint: '#1f0b09' },
      shortDesc: 'Monkey D. Luffy và băng Mũ Rơm dong buồm khắp Đại Hải Trình tìm kiếm kho báu vĩ đại One Piece.',
      fullDesc: 'Hành trình phiêu lưu vĩ đại nhất lịch sử manga/anime kéo dài hơn hai thập kỷ, bùng nổ kỷ nguyên Gear 5 và đảo Egghead.',
      characters: [
        c('Monkey D. Luffy', 'モンキー・D・ルフィ', 'Mũ Rơm / Thần Mặt Trời Nika', 'Thuyền trưởng', 'Nam', 'Tự do, trượng nghĩa, yêu đồng đội', 'Trái Hito Hito Model: Nika & Bá Vương Khí', 'Gear 5', 'Tôi sẽ trở thành Vua Hải Tặc!', '#ef4444'),
        c('Roronoa Zoro', 'ロロノア・ゾロ', 'Thợ săn Hải tặc', 'Kiếm sĩ', 'Nam', 'Kiên định, trung thành tuyệt đối', 'Tam Kiếm Phái & Bá Vương Khí', 'Wado Ichimonji, Enma', 'Tôi sẽ không bao giờ thua thêm một lần nào nữa!', '#10b981'),
        c('Vinsmoke Sanji', 'サンジ', 'Chân Đen', 'Đầu bếp', 'Nam', 'Lịch thiệp, nấu ăn tuyệt đỉnh', 'Diable / Ifrit Jambe & Gen Siêu Nhân', 'Cước pháp Chân Đen', 'Ta thà chết chứ không bao giờ đá phụ nữ.', '#facc15'),
        c('Nami', 'ナミ', 'Miêu Tặc', 'Hoa tiêu', 'Nữ', 'Thông minh, dẫn đường băng Mũ Rơm', 'Điều khiển thời tiết & Zeus', 'Gậy Thời Tiết', 'Tôi sẽ vẽ bản đồ toàn bộ thế giới này!', '#f97316'),
        c('Nico Robin', 'ニコ・ロビン', 'Đứa con của quỷ', 'Nhà khảo cổ', 'Nữ', 'Trầm tĩnh, uyên bác', 'Trái Hana Hana mọc chi vô hạn', 'Đọc Poneglyph', 'Tôi muốn được sống!', '#a855f7'),
        c('Portgas D. Ace', 'ポートガス・D・エース', 'Hỏa Quyền', 'Anh trai Luffy', 'Nam', 'Hào sảng, sống không hối tiếc', 'Trái Mera Mera (Lửa)', 'Hỏa Quyền', 'Cảm ơn mọi người vì đã yêu thương một kẻ như tôi!', '#f43f5e'),
        c('Trafalgar D. Water Law', 'トラファルガー・ロー', 'Bác sĩ Tử Thần', 'Đồng minh', 'Nam', 'Lạnh lùng, mưu lược', 'Trái Ope Ope tạo ROOM', 'Thanh Kikoku', 'ROOM! Shambles!', '#38bdf8'),
        c('Shanks', 'シャンクス', 'Tóc Đỏ', 'Tứ Hoàng', 'Nam', 'Phóng khoáng, uy lực kinh thiên', 'Bá Vương Khí tối thượng', 'Kiếm Gryphon', 'Hãy trả lại chiếc mũ này khi cậu trở thành hải tặc vĩ đại.', '#dc2626'),
        c('Sabo', 'サボ', 'Tham mưu trưởng Cách Mạng', 'Anh trai Luffy', 'Nam', 'Chính trực, chiến đấu vì tự do', 'Long Trảo Quyền & Hỏa Quyền', 'Ống thép & lửa', 'Ta sẽ kế thừa ý chí của Ace bảo vệ Luffy!', '#eab308'),
        c('Boa Hancock', 'ボア・ハンコック', 'Nữ Hoàng Hải Tặc', 'Thất Vũ Hải', 'Nữ', 'Kiêu hãnh, dịu dàng duy nhất với Luffy', 'Trái Mero Mero hóa đá', 'Mũi tên ái tình', 'Dù ta có làm gì cũng được tha thứ vì ta xinh đẹp!', '#ec4899')
      ],
      related: ['naruto-shippuden', 'dragon-ball-super', 'hunter-x-hunter']
    }),
    a({
      id: 'bleach', anilistSearch: 'Bleach',
      title: 'Bleach', titleJp: 'BLEACH', titleEn: 'Bleach', titleVi: 'Sứ Mệnh Thần Chết',
      era: 'classic', year: 2004, releaseSeason: 'Fall', seasons: 1, episodes: '366 tập',
      studio: 'Pierrot', creator: 'Tite Kubo', director: 'Noriyuki Abe',
      genres: ['Action', 'Adventure', 'Supernatural'], rating: 8.2, popularityRank: 10,
      theme: { primary: '#f97316', secondary: '#38bdf8', bgTint: '#1b0d07' },
      shortDesc: 'Ichigo Kurosaki nhận sức mạnh Tử Thần từ Rukia để bảo vệ người thân khỏi các Hollow và thế lực Hueco Mundo.',
      fullDesc: 'Một trong "Big Three" huyền thoại nổi bật với phong cách thời trang, kiếm Trảm Hồn Đao và những màn Bankai bất hủ.',
      related: ['bleach-tybw', 'naruto-shippuden', 'jujutsu-kaisen']
    }),
    a({
      id: 'hunter-x-hunter', anilistSearch: 'Hunter x Hunter (2011)',
      title: 'Hunter x Hunter (2011)', titleJp: 'HUNTER×HUNTER', titleEn: 'Hunter x Hunter', titleVi: 'Thợ Săn Tí Hon',
      era: 'classic', year: 2011, releaseSeason: 'Fall', seasons: 1, episodes: '148 tập',
      studio: 'Madhouse', creator: 'Yoshihiro Togashi', director: 'Hiroshi Koujina',
      genres: ['Action', 'Adventure', 'Fantasy'], rating: 9.0, popularityRank: 5,
      theme: { primary: '#10b981', secondary: '#facc15', bgTint: '#081b12' },
      shortDesc: 'Gon Freecss tham gia kỳ thi Hunter để tìm người cha huyền thoại Ging cùng Killua, Kurapika và Leorio.',
      fullDesc: 'Sở hữu hệ thống sức mạnh Niệm (Nen) chặt chẽ bậc nhất và chương Kiến Chimera đạt đỉnh cao triết lý nhân sinh.',
      related: ['one-piece', 'naruto-shippuden', 'fullmetal-alchemist']
    }),
    a({
      id: 'death-note', anilistSearch: 'Death Note',
      title: 'Death Note', titleJp: 'デスノート', titleEn: 'Death Note', titleVi: 'Quyển Sổ Thiên Mệnh',
      era: 'classic', year: 2006, releaseSeason: 'Fall', seasons: 1, episodes: '37 tập',
      studio: 'Madhouse', creator: 'Tsugumi Ohba & Takeshi Obata', director: 'Tetsuro Araki',
      genres: ['Mystery', 'Drama', 'Supernatural'], rating: 8.9, popularityRank: 2,
      theme: { primary: '#dc2626', secondary: '#94a3b8', bgTint: '#120709' },
      shortDesc: 'Thiên tài Light Yagami nhặt được cuốn sổ giết người của Tử Thần Ryuk và bước vào cuộc đấu trí sinh tử với thám tử L.',
      fullDesc: 'Cuộc đối đầu cân não kinh điển giữa Kira và L định nghĩa lại thể loại trinh thám tâm lý trong anime.',
      related: ['code-geass', 'monster', 'steins-gate']
    }),
    a({
      id: 'fullmetal-alchemist', anilistSearch: 'Fullmetal Alchemist: Brotherhood',
      title: 'Fullmetal Alchemist: Brotherhood', titleJp: '鋼の錬金術師 FULLMETAL ALCHEMIST', titleEn: 'Fullmetal Alchemist: Brotherhood', titleVi: 'Giả Kim Thuật Sư',
      era: 'classic', year: 2009, releaseSeason: 'Spring', seasons: 1, episodes: '64 tập',
      studio: 'Bones', creator: 'Hiromu Arakawa', director: 'Yasuhiro Irie',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy'], rating: 9.1, popularityRank: 4,
      theme: { primary: '#dc2626', secondary: '#f59e0b', bgTint: '#1c0a0a' },
      shortDesc: 'Hai anh em Edward và Alphonse Elric lên đường tìm Hòn Đá Triết Gia để lấy lại cơ thể đã mất vì luật Trao Đổi Ngang Giá.',
      fullDesc: 'Kiệt tác trọn vẹn về cốt truyện, chính trị, tình anh em và nhân văn luôn đứng top đầu mọi bảng xếp hạng.',
      related: ['attack-on-titan', 'hunter-x-hunter', 'steins-gate']
    }),
    a({
      id: 'code-geass', anilistSearch: 'Code Geass: Hangyaku no Lelouch',
      title: 'Code Geass: Lelouch of the Rebellion', titleJp: 'コードギアス 反逆のルルーシュ', titleEn: 'Code Geass', titleVi: 'Lelouch Nổi Loạn',
      era: 'classic', year: 2006, releaseSeason: 'Fall', seasons: 2, episodes: '50 tập',
      studio: 'Sunrise', creator: 'Ichiro Okouchi / Goro Taniguchi', director: 'Goro Taniguchi',
      genres: ['Action', 'Drama', 'Sci-Fi'], rating: 8.8, popularityRank: 7,
      theme: { primary: '#7c3aed', secondary: '#ef4444', bgTint: '#140821' },
      shortDesc: 'Hoàng tử lưu vong Lelouch nhận quyền năng Geass "Mệnh Lệnh Tuyệt Đối" để lật đổ Đế quốc Britannia.',
      fullDesc: 'Nổi tiếng với những màn chiến thuật mecha và cái kết Zero Requiem vĩ đại nhất lịch sử anime.',
      related: ['death-note', 'attack-on-titan', 'steins-gate']
    }),
    a({
      id: 'steins-gate', anilistSearch: 'Steins;Gate',
      title: 'Steins;Gate', titleJp: 'シュタインズ・ゲート', titleEn: 'Steins;Gate', titleVi: 'Cổng Thời Gian',
      era: 'classic', year: 2011, releaseSeason: 'Spring', seasons: 1, episodes: '24 tập + S;G 0 (23)',
      studio: 'White Fox', creator: '5pb. / Nitroplus', director: 'Hiroshi Hamasaki / Takuya Sato',
      genres: ['Drama', 'Mystery', 'Sci-Fi'], rating: 9.0, popularityRank: 6,
      theme: { primary: '#10b981', secondary: '#f59e0b', bgTint: '#091614' },
      shortDesc: 'Nhà khoa học lập dị Rintaro Okabe vô tình chế tạo máy gửi tin nhắn về quá khứ, kéo theo bi kịch vòng lặp thời gian.',
      fullDesc: 'Đỉnh cao du hành thời gian khoa học viễn tưởng với sự hy sinh đau đớn để chạm tới đường thế giới Steins;Gate.',
      related: ['re-zero', 'summertime-rendering', 'death-note']
    }),
    a({
      id: 'tokyo-ghoul', anilistSearch: 'Tokyo Ghoul',
      title: 'Tokyo Ghoul', titleJp: '東京喰種', titleEn: 'Tokyo Ghoul', titleVi: 'Ngạ Quỷ Vùng Tokyo',
      era: 'classic', year: 2014, releaseSeason: 'Summer', seasons: 4, episodes: '48 tập',
      studio: 'Pierrot', creator: 'Sui Ishida', director: 'Shuhei Morita',
      genres: ['Action', 'Horror', 'Drama', 'Supernatural'], rating: 7.9, popularityRank: 9,
      theme: { primary: '#dc2626', secondary: '#94a3b8', bgTint: '#16070a' },
      shortDesc: 'Sinh viên Ken Kaneki trở thành bán Ngạ Quỷ sau tai nạn cấy ghép nội tạng, bị giằng xé giữa hai thế giới.',
      fullDesc: 'Gắn liền khoảnh khắc Kaneki tóc trắng bẻ ngón tay và ca khúc bất hủ "Unravel".',
      related: ['chainsaw-man', 'jujutsu-kaisen', 'hellsing-ultimate']
    }),
    a({
      id: 'sword-art-online', anilistSearch: 'Sword Art Online',
      title: 'Sword Art Online', titleJp: 'ソードアート・オンライン', titleEn: 'Sword Art Online', titleVi: 'Đao Kiếm Thần Vực',
      era: 'classic', year: 2012, releaseSeason: 'Summer', seasons: 4, episodes: '96 tập',
      studio: 'A-1 Pictures', creator: 'Reki Kawahara', director: 'Tomohiko Ito',
      genres: ['Action', 'Adventure', 'Fantasy', 'Romance', 'Sci-Fi'], rating: 7.7, popularityRank: 8,
      theme: { primary: '#38bdf8', secondary: '#a855f7', bgTint: '#091426' },
      shortDesc: '10.000 người chơi bị mắc kẹt trong thế giới thực tế ảo SAO nơi cái chết trong game đồng nghĩa cái chết ngoài đời.',
      fullDesc: 'Tác phẩm khai mở làn sóng anime game thực tế ảo với cặp đôi Kirito và Asuna.',
      related: ['solo-leveling', 're-zero', 'mushoku-tensei']
    }),
    a({
      id: 'fairy-tail', anilistSearch: 'Fairy Tail',
      title: 'Fairy Tail', titleJp: 'FAIRY TAIL', titleEn: 'Fairy Tail', titleVi: 'Hội Pháp Sư',
      era: 'classic', year: 2009, releaseSeason: 'Fall', seasons: 3, episodes: '328 tập + 100 Years Quest',
      studio: 'A-1 Pictures / Satelight', creator: 'Hiro Mashima', director: 'Shinji Ishihira',
      genres: ['Action', 'Adventure', 'Comedy', 'Fantasy'], rating: 7.9, popularityRank: 19,
      theme: { primary: '#ef4444', secondary: '#facc15', bgTint: '#1e0d08' },
      shortDesc: 'Natsu Dragneel, Lucy, Gray và Erza cùng hội pháp sư Fairy Tail bảo vệ tình bạn bằng ma thuật rực lửa.',
      fullDesc: 'Bài ca bất diệt về tình đồng đội và những giai điệu nhạc nền Celtic sôi động.',
      related: ['black-clover', 'one-piece', 'naruto-shippuden']
    }),
    a({
      id: 'black-clover', anilistSearch: 'Black Clover',
      title: 'Black Clover', titleJp: 'ブラッククローバー', titleEn: 'Black Clover', titleVi: 'Cỏ Ba Lá Đen',
      era: 'classic', year: 2017, releaseSeason: 'Fall', seasons: 1, episodes: '170 tập + Movie',
      studio: 'Pierrot', creator: 'Yuki Tabata', director: 'Tatsuya Yoshihara',
      genres: ['Action', 'Adventure', 'Fantasy'], rating: 8.2, popularityRank: 14,
      theme: { primary: '#dc2626', secondary: '#94a3b8', bgTint: '#14080c' },
      shortDesc: 'Cậu bé không có ma pháp Asta cầm thanh kiếm Phản Ma Pháp quyết tâm trở thành Ma Pháp Vương cùng Yuno.',
      fullDesc: 'Tác phẩm tôn vinh ý chí "Không bao giờ bỏ cuộc là ma pháp của tôi" cùng đội Hắc Bộc Ngưu.',
      related: ['fairy-tail', 'naruto-shippuden', 'my-hero-academia-final']
    }),
    a({
      id: 'jojo', anilistSearch: 'JoJo no Kimyou na Bouken',
      title: 'JoJo\'s Bizarre Adventure', titleJp: 'ジョジョの奇妙な冒険', titleEn: 'JoJo\'s Bizarre Adventure', titleVi: 'Cuộc Phiêu Lưu Bí Ẩn Của JoJo',
      era: 'classic', year: 2012, releaseSeason: 'Fall', seasons: 5, episodes: '190 tập (Parts 1–6)',
      studio: 'David Production', creator: 'Hirohiko Araki', director: 'Naokatsu Tsuda',
      genres: ['Action', 'Adventure', 'Supernatural'], rating: 8.6, popularityRank: 11,
      theme: { primary: '#a855f7', secondary: '#facc15', bgTint: '#180924' },
      shortDesc: 'Nhiều thế hệ gia tộc Joestar sử dụng Gợn Sóng và năng lực Stand đối đầu những thế lực siêu nhiên kỳ dị.',
      fullDesc: 'Biểu tượng phong cách nghệ thuật độc tôn của Hirohiko Araki từ Dio Brando đến Jotaro và Giorno.',
      related: ['hunter-x-hunter', 'gintama', 'dandadan']
    }),
    a({
      id: 'evangelion', anilistSearch: 'Shin Seiki Evangelion',
      title: 'Neon Genesis Evangelion', titleJp: '新世紀エヴァンゲリオン', titleEn: 'Neon Genesis Evangelion', titleVi: 'Tân Thế Kỷ Evangelion',
      era: 'classic', year: 1995, releaseSeason: 'Fall', seasons: 1, episodes: '26 tập + End of Evangelion',
      studio: 'Gainax', creator: 'Hideaki Anno', director: 'Hideaki Anno',
      genres: ['Action', 'Drama', 'Sci-Fi', 'Mystery'], rating: 8.6, popularityRank: 13,
      theme: { primary: '#7c3aed', secondary: '#10b981', bgTint: '#120821' },
      shortDesc: 'Shinji Ikari buộc phải lái cỗ máy sinh học Eva-01 chống lại các Sứ Đồ giữa nỗi cô độc tâm lý tuổi dậy thì.',
      fullDesc: 'Kiệt tác giải cấu trúc thể loại mecha làm thay đổi mãi mãi lịch sử hoạt họa Nhật Bản.',
      related: ['code-geass', 'steins-gate', 'cowboy-bebop']
    }),
    a({
      id: 'cowboy-bebop', anilistSearch: 'Cowboy Bebop',
      title: 'Cowboy Bebop', titleJp: 'カウボーイビバップ', titleEn: 'Cowboy Bebop', titleVi: 'Chàng Cao Bồi Không Gian',
      era: 'classic', year: 1998, releaseSeason: 'Spring', seasons: 1, episodes: '26 tập',
      studio: 'Sunrise', creator: 'Hajime Yatate', director: 'Shinichiro Watanabe',
      genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'], rating: 8.9, popularityRank: 12,
      theme: { primary: '#f59e0b', secondary: '#38bdf8', bgTint: '#1a1108' },
      shortDesc: 'Nhóm thợ săn tiền thưởng trên con tàu Bebop lang thang khắp Hệ Mặt Trời năm 2071 cùng quá khứ khó quên.',
      fullDesc: 'Tuyệt phẩm kinh điển của Shinichiro Watanabe kết hợp nhạc jazz của Yoko Kanno và phong thái neo-noir.',
      related: ['lazarus', 'cyberpunk-edgerunners', 'evangelion']
    }),
    a({
      id: 'monster', anilistSearch: 'Monster',
      title: 'Monster', titleJp: 'モンスター', titleEn: 'Monster', titleVi: 'Quái Vật',
      era: 'classic', year: 2004, releaseSeason: 'Spring', seasons: 1, episodes: '74 tập',
      studio: 'Madhouse', creator: 'Naoki Urasawa', director: 'Masayuki Kojima',
      genres: ['Drama', 'Mystery', 'Horror'], rating: 8.9, popularityRank: 17,
      theme: { primary: '#64748b', secondary: '#ef4444', bgTint: '#111218' },
      shortDesc: 'Bác sĩ giải phẫu não Kenzo Tenma chọn cứu mạng cậu bé Johan Liebert để rồi phát hiện mình đã cứu một tên sát nhân quái vật.',
      fullDesc: 'Tiểu thuyết hình sự tâm lý xuất sắc nhất anime về giá trị sinh mạng con người.',
      related: ['death-note', 'orb-earth', 'steins-gate']
    }),
    a({
      id: 'hellsing-ultimate', anilistSearch: 'Hellsing Ultimate',
      title: 'Hellsing Ultimate', titleJp: 'HELLSING OVA', titleEn: 'Hellsing Ultimate', titleVi: 'Ma Cà Rồng Hellsing',
      era: 'classic', year: 2006, releaseSeason: 'Winter', seasons: 1, episodes: '10 tập OVA',
      studio: 'Madhouse / Satelight', creator: 'Kouta Hirano', director: 'Tomokazu Tokoro',
      genres: ['Action', 'Horror', 'Supernatural'], rating: 8.4, popularityRank: 27,
      theme: { primary: '#dc2626', secondary: '#f59e0b', bgTint: '#1f0608' },
      shortDesc: 'Tổ chức Hellsing và ma cà rồng tối thượng Alucard đối đầu đội quân phát xít bất tử tại London.',
      fullDesc: '10 tập OVA bùng nổ bạo lực nghệ thuật gothic và khí chất áp đảo của Alucard.',
      related: ['tokyo-ghoul', 'chainsaw-man', 'dorohedoro-s2']
    }),
    a({
      id: 'gintama', anilistSearch: 'Gintama',
      title: 'Gintama', titleJp: '銀魂', titleEn: 'Gintama', titleVi: 'Linh Hồn Bạc',
      era: 'classic', year: 2006, releaseSeason: 'Spring', seasons: 1, episodes: '367 tập + Movie The Final',
      studio: 'Sunrise / BN Pictures', creator: 'Hideaki Sorachi', director: 'Shinji Takamatsu / Yoichi Fujita',
      genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'], rating: 9.0, popularityRank: 16,
      theme: { primary: '#38bdf8', secondary: '#f8fafc', bgTint: '#0b1624' },
      shortDesc: 'Samurai tóc bạc Gintoki Sakata làm nghề vạn năng tại Edo thời người ngoài hành tinh Amanto đổ bộ.',
      fullDesc: 'Ông hoàng anime hài hước châm biếm nhưng luôn sẵn sàng lấy nước mắt bằng những trận chiến samurai bi tráng.',
      related: ['sakamoto-days', 'one-piece', 'cowboy-bebop']
    }),
    a({
      id: 'inuyasha', anilistSearch: 'InuYasha',
      title: 'Inuyasha', titleJp: '犬夜叉', titleEn: 'InuYasha', titleVi: 'Khuyển Dạ Xoa',
      era: 'classic', year: 2000, releaseSeason: 'Fall', seasons: 2, episodes: '193 tập (bao gồm The Final Act)',
      studio: 'Sunrise', creator: 'Rumiko Takahashi', director: 'Masashi Ikeda',
      genres: ['Action', 'Adventure', 'Fantasy', 'Romance'], rating: 8.0, popularityRank: 20,
      theme: { primary: '#ef4444', secondary: '#ec4899', bgTint: '#210b10' },
      shortDesc: 'Nữ sinh Kagome xuyên không về thời Chiến Quốc và đồng hành cùng bán yêu Inuyasha thu thập mảnh Ngọc Tứ Hồn.',
      fullDesc: 'Huyền thoại tuổi thơ kết hợp giữa phiêu lưu diệt yêu, âm nhạc bi tráng và tình yêu vượt thời gian.',
      related: ['ranma-2024', 'demon-slayer', 'frieren']
    }),
    a({
      id: 'detective-conan', anilistSearch: 'Meitantei Conan',
      title: 'Detective Conan', titleJp: '名探偵コナン', titleEn: 'Case Closed', titleVi: 'Thám Tử Lừng Danh Conan',
      era: 'classic', year: 1996, releaseSeason: 'Winter', seasons: 1, episodes: '1100+ tập & 29+ Movies',
      studio: 'TMS Entertainment', creator: 'Gosho Aoyama', director: 'Kenji Kodama / Yasuichiro Yamamoto',
      genres: ['Mystery', 'Comedy', 'Drama', 'Adventure'], rating: 8.3, popularityRank: 15,
      theme: { primary: '#2563eb', secondary: '#ef4444', bgTint: '#081226' },
      shortDesc: 'Thám tử trung học Shinichi Kudo bị teo nhỏ thành Conan Edogawa, âm thầm phá án và truy tìm Tổ Chức Áo Đen.',
      fullDesc: 'Tượng đài trinh thám gắn bó gần 3 thập kỷ cùng loạt phim điện ảnh phá kỷ lục phòng vé Nhật Bản.',
      related: ['death-note', 'monster', 'apothecary-diaries']
    }),
    a({
      id: 'slam-dunk', anilistSearch: 'Slam Dunk',
      title: 'Slam Dunk', titleJp: 'SLAM DUNK', titleEn: 'Slam Dunk', titleVi: 'Cao Thủ Bóng Rổ',
      era: 'classic', year: 1993, releaseSeason: 'Fall', seasons: 1, episodes: '101 tập + The First Slam Dunk',
      studio: 'Toei Animation', creator: 'Takehiko Inoue', director: 'Nobutaka Nishizawa',
      genres: ['Sports', 'Comedy', 'Drama', 'School'], rating: 8.7, popularityRank: 22,
      theme: { primary: '#dc2626', secondary: '#f8fafc', bgTint: '#210909' },
      shortDesc: 'Cậu học sinh đầu gấu Hanamichi Sakuragi gia nhập đội bóng rổ Shohoku vì thích Haruko và tìm thấy đam mê thật sự.',
      fullDesc: 'Kinh điển thể thao vĩ đại truyền cảm hứng bóng rổ cho cả châu Á.',
      related: ['haikyuu', 'blue-lock', 'medalist']
    }),
    a({
      id: 'haikyuu', anilistSearch: 'Haikyuu!!',
      title: 'Haikyuu!!', titleJp: 'ハイキュー!!', titleEn: 'Haikyuu!!', titleVi: 'Vua Bóng Chuyền',
      era: 'classic', year: 2014, releaseSeason: 'Spring', seasons: 4, episodes: '85 tập + Movie Trận Chiến Bãi Phế Liệu (2024)',
      studio: 'Production I.G', creator: 'Haruichi Furudate', director: 'Susumu Mitsunaka',
      genres: ['Sports', 'Comedy', 'Drama', 'School'], rating: 8.9, popularityRank: 6,
      theme: { primary: '#f97316', secondary: '#06b6d4', bgTint: '#1e1007' },
      shortDesc: 'Chàng thấp bé Shoyo Hinata và chuyền hai thiên tài Kageyama cùng đội Karasuno bay cao tại giải toàn quốc.',
      fullDesc: 'Đỉnh cao anime thể thao hiện đại, tiếp tục gây sốt toàn cầu với phim điện ảnh đối đầu Nekoma năm 2024.',
      related: ['slam-dunk', 'blue-lock', 'medalist']
    }),
    a({
      id: 'your-lie-in-april', anilistSearch: 'Shigatsu wa Kimi no Uso',
      title: 'Your Lie in April', titleJp: '四月は君の嘘', titleEn: 'Your Lie in April', titleVi: 'Lời Nói Dối Tháng Tư',
      era: 'classic', year: 2014, releaseSeason: 'Fall', seasons: 1, episodes: '22 tập',
      studio: 'A-1 Pictures', creator: 'Naoshi Arakawa', director: 'Kyohei Ishiguro',
      genres: ['Drama', 'Romance', 'School'], rating: 8.7, popularityRank: 10,
      theme: { primary: '#f472b6', secondary: '#facc15', bgTint: '#210d17' },
      shortDesc: 'Thần đồng piano Kousei Arima tìm lại sắc màu âm nhạc nhờ cô nàng violin tự do Kaori Miyazono.',
      fullDesc: 'Bản giao hưởng mùa xuân đầy nước mắt về tình yêu, âm nhạc và ánh sáng sống.',
      related: ['clannad', 'bocchi-the-rock', 'fragrant-flower']
    }),
    a({
      id: 'clannad', anilistSearch: 'Clannad: After Story',
      title: 'Clannad / Clannad: After Story', titleJp: 'CLANNAD', titleEn: 'Clannad', titleVi: 'Clannad – Phép Màu Gia Đình',
      era: 'classic', year: 2007, releaseSeason: 'Fall', seasons: 2, episodes: '47 tập',
      studio: 'Kyoto Animation', creator: 'Key / VisualArt\'s', director: 'Tatsuya Ishihara',
      genres: ['Drama', 'Romance', 'School', 'Supernatural'], rating: 8.9, popularityRank: 18,
      theme: { primary: '#ec4899', secondary: '#facc15', bgTint: '#1f0d1b' },
      shortDesc: 'Câu chuyện từ mái trường trung học đến hành trình trưởng thành, hôn nhân và gia đình của Tomoya và Nagisa.',
      fullDesc: 'Kiệt tác lấy nước mắt kinh điển nhất của Kyoto Animation về tình cảm gia đình thiêng liêng.',
      related: ['your-lie-in-april', 'toradora', 'fragrant-flower']
    }),
    a({
      id: 'toradora', anilistSearch: 'Toradora!',
      title: 'Toradora!', titleJp: 'とらドラ！', titleEn: 'Toradora!', titleVi: 'Hổ Và Rồng',
      era: 'classic', year: 2008, releaseSeason: 'Fall', seasons: 1, episodes: '25 tập',
      studio: 'J.C.Staff', creator: 'Yuyuko Takemiya', director: 'Tatsuyuki Nagai',
      genres: ['Comedy', 'Drama', 'Romance', 'School'], rating: 8.2, popularityRank: 19,
      theme: { primary: '#f59e0b', secondary: '#ec4899', bgTint: '#1c1208' },
      shortDesc: 'Ryuuji hiền lành nhưng mặt dữ tợn bắt tay cùng "Hổ Bỏ Túi" Taiga giúp nhau chinh phục người thầm thương.',
      fullDesc: 'Kinh điển lãng mạn học đường định nghĩa hình mẫu tsundere và khoảnh khắc Giáng sinh bất hủ.',
      related: ['kaguya-sama', 'fragrant-flower', 'clannad']
    })
  ];

  // Hàm lookup nhanh
  function getById(id) {
    return ANIME_LIST.find(item => item.id === id) || ANIME_LIST[0];
  }

  AV.GENRES = GENRES;
  AV.ANIME_LIST = ANIME_LIST;
  AV.getById = getById;
})(window.AnimeVerse);
