const voiceList: Record<string, string> = {
  "ar-SA-HamedNeural": "حامد",
  "ar-SA-ZariyahNeural": "زارية",
  "de-DE-AmalaNeural": "Amala",
  "de-DE-BerndNeural": "Bernd",
  "de-DE-ChristophNeural": "Christoph",
  "de-DE-ConradNeural": "Conrad",
  "de-DE-ElkeNeural": "Elke",
  "de-DE-GiselaNeural": "Gisela",
  "de-DE-KasperNeural": "Kasper",
  "de-DE-KatjaNeural": "Katja",
  "de-DE-KillianNeural": "Killian",
  "de-DE-KlarissaNeural": "Klarissa",
  "de-DE-KlausNeural": "Klaus",
  "de-DE-LouisaNeural": "Louisa",
  "de-DE-MajaNeural": "Maja",
  "de-DE-RalfNeural": "Ralf",
  "de-DE-TanjaNeural": "Tanja",
  "en-US-AIGenerate1Neural": "AIGenerate1",
  "en-US-AIGenerate2Neural": "AIGenerate2",
  "en-US-AmberNeural": "Amber",
  "en-US-AnaNeural": "Ana",
  "en-US-AndrewNeural": "Andrew",
  "en-US-AriaNeural": "Aria",
  "en-US-AshleyNeural": "Ashley",
  "en-US-BlueNeural": "Blue",
  "en-US-BrandonNeural": "Brandon",
  "en-US-BrianNeural": "Brian",
  "en-US-ChristopherNeural": "Christopher",
  "en-US-CoraNeural": "Cora",
  "en-US-DavisNeural": "Davis",
  "en-US-ElizabethNeural": "Elizabeth",
  "en-US-EmmaNeural": "Emma",
  "en-US-EricNeural": "Eric",
  "en-US-GuyNeural": "Guy",
  "en-US-JacobNeural": "Jacob",
  "en-US-JaneNeural": "Jane",
  "en-US-JasonNeural": "Jason",
  "en-US-JennyMultilingualNeural": "Jenny Multilingual",
  "en-US-JennyMultilingualV2Neural": "Jenny Multilingual V2",
  "en-US-JennyNeural": "Jenny",
  "en-US-MichelleNeural": "Michelle",
  "en-US-MonicaNeural": "Monica",
  "en-US-NancyNeural": "Nancy",
  "en-US-RogerNeural": "Roger",
  "en-US-RyanMultilingualNeural": "Ryan Multilingual",
  "en-US-SaraNeural": "Sara",
  "en-US-SteffanNeural": "Steffan",
  "en-US-TonyNeural": "Tony",
  "es-ES-AbrilNeural": "Abril",
  "es-ES-AlvaroNeural": "Álvaro",
  "es-ES-ArnauNeural": "Arnau",
  "es-ES-DarioNeural": "Dario",
  "es-ES-EliasNeural": "Elias",
  "es-ES-ElviraNeural": "Elvira",
  "es-ES-EstrellaNeural": "Estrella",
  "es-ES-IreneNeural": "Irene",
  "es-ES-LaiaNeural": "Laia",
  "es-ES-LiaNeural": "Lia",
  "es-ES-NilNeural": "Nil",
  "es-ES-SaulNeural": "Saul",
  "es-ES-TeoNeural": "Teo",
  "es-ES-TrianaNeural": "Triana",
  "es-ES-VeraNeural": "Vera",
  "fr-FR-AlainNeural": "Alain",
  "fr-FR-BrigitteNeural": "Brigitte",
  "fr-FR-CelesteNeural": "Celeste",
  "fr-FR-ClaudeNeural": "Claude",
  "fr-FR-CoralieNeural": "Coralie",
  "fr-FR-DeniseNeural": "Denise",
  "fr-FR-EloiseNeural": "Eloise",
  "fr-FR-HenriNeural": "Henri",
  "fr-FR-JacquelineNeural": "Jacqueline",
  "fr-FR-JeromeNeural": "Jerome",
  "fr-FR-JosephineNeural": "Josephine",
  "fr-FR-MauriceNeural": "Maurice",
  "fr-FR-YvesNeural": "Yves",
  "fr-FR-YvetteNeural": "Yvette",
  "ja-JP-AoiNeural": "碧衣",
  "ja-JP-DaichiNeural": "大智",
  "ja-JP-KeitaNeural": "圭太",
  "ja-JP-MayuNeural": "真夕",
  "ja-JP-NanamiNeural": "七海",
  "ja-JP-NaokiNeural": "直紀",
  "ja-JP-ShioriNeural": "志織",
  "ko-KR-BongJinNeural": "봉진",
  "ko-KR-GookMinNeural": "국민",
  "ko-KR-InJoonNeural": "인준",
  "ko-KR-JiMinNeural": "지민",
  "ko-KR-SeoHyeonNeural": "서현",
  "ko-KR-SoonBokNeural": "순복",
  "ko-KR-SunHiNeural": "선히",
  "ko-KR-YuJinNeural": "유진",
  "pt-BR-AntonioNeural": "Antônio",
  "pt-BR-BrendaNeural": "Brenda",
  "pt-BR-DonatoNeural": "Donato",
  "pt-BR-ElzaNeural": "Elza",
  "pt-BR-FabioNeural": "Fabio",
  "pt-BR-FranciscaNeural": "Francisca",
  "pt-BR-GiovannaNeural": "Giovanna",
  "pt-BR-HumbertoNeural": "Humberto",
  "pt-BR-JulioNeural": "Julio",
  "pt-BR-LeilaNeural": "Leila",
  "pt-BR-LeticiaNeural": "Leticia",
  "pt-BR-ManuelaNeural": "Manuela",
  "pt-BR-NicolauNeural": "Nicolau",
  "pt-BR-ValerioNeural": "Valerio",
  "pt-BR-YaraNeural": "Yara",
  "ru-RU-DariyaNeural": "Дария",
  "ru-RU-DmitryNeural": "Дмитрий",
  "ru-RU-SvetlanaNeural": "Светлана",
  "zh-CN-XiaochenNeural": "晓辰",
  "zh-CN-XiaohanNeural": "晓涵",
  "zh-CN-XiaomengNeural": "晓梦",
  "zh-CN-XiaomoNeural": "晓墨",
  "zh-CN-XiaoqiuNeural": "晓秋",
  "zh-CN-XiaorouNeural": "晓柔",
  "zh-CN-XiaoruiNeural": "晓睿",
  "zh-CN-XiaoshuangNeural": "晓双",
  "zh-CN-XiaoxiaoNeural": "晓晓",
  "zh-CN-XiaoxuanNeural": "晓萱",
  "zh-CN-XiaoyanNeural": "晓颜",
  "zh-CN-XiaoyiNeural": "晓伊",
  "zh-CN-XiaoyouNeural": "晓悠",
  "zh-CN-XiaozhenNeural": "晓甄",
  "zh-CN-YunfengNeural": "云枫",
  "zh-CN-YunhaoNeural": "云皓",
  "zh-CN-YunjianNeural": "云健",
  "zh-CN-YunjieNeural": "云杰",
  "zh-CN-YunxiNeural": "云希",
  "zh-CN-YunxiaNeural": "云夏",
  "zh-CN-YunyangNeural": "云扬",
  "zh-CN-YunyeNeural": "云野",
  "zh-CN-YunzeNeural": "云泽",
  "wuu-CN-XiaotongNeural": "晓彤(上海话)",
  "wuu-CN-YunzheNeural": "云哲(上海话)",
  "yue-CN-XiaoMinNeural": "晓敏(粤语)",
  "yue-CN-YunSongNeural": "云松(粤语)",
  "zh-CN-guangxi-YunqiNeural": "云奇(广西话)",
  "zh-CN-henan-YundengNeural": "云登(河南话)",
  "zh-CN-liaoning-XiaobeiNeural": "晓北(东北话)",
  "zh-CN-liaoning-YunbiaoNeural": "云彪(东北话)",
  "zh-CN-shaanxi-XiaoniNeural": "晓妮(陕西话)",
  "zh-CN-shandong-YunxiangNeural": "云翔(山东话)",
  "zh-CN-sichuan-YunxiNeural": "云希(四川话)",
  "zh-TW-HsiaoChenNeural": "曉臻",
  "zh-TW-HsiaoYuNeural": "曉雨",
  "zh-TW-YunJheNeural": "雲哲",
};

export default voiceList;
