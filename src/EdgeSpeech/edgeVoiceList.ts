const edgeVoiceList: Record<string, string[]> = {
  "ar-SA": ["ar-SA-HamedNeural", "ar-SA-ZariyahNeural"],
  "de-DE": [
    "de-DE-AmalaNeural",
    "de-DE-BerndNeural",
    "de-DE-ChristophNeural",
    "de-DE-ConradNeural",
    "de-DE-ElkeNeural",
    "de-DE-GiselaNeural",
    "de-DE-KasperNeural",
    "de-DE-KatjaNeural",
    "de-DE-KillianNeural",
    "de-DE-KlarissaNeural",
    "de-DE-KlausNeural",
    "de-DE-LouisaNeural",
    "de-DE-MajaNeural",
    "de-DE-RalfNeural",
    "de-DE-TanjaNeural",
  ],
  "en-US": [
    "en-US-AIGenerate1Neural",
    "en-US-AIGenerate2Neural",
    "en-US-AmberNeural",
    "en-US-AnaNeural",
    "en-US-AndrewNeural",
    "en-US-AriaNeural",
    "en-US-AshleyNeural",
    "en-US-BlueNeural",
    "en-US-BrandonNeural",
    "en-US-BrianNeural",
    "en-US-ChristopherNeural",
    "en-US-CoraNeural",
    "en-US-DavisNeural",
    "en-US-ElizabethNeural",
    "en-US-EmmaNeural",
    "en-US-EricNeural",
    "en-US-GuyNeural",
    "en-US-JacobNeural",
    "en-US-JaneNeural",
    "en-US-JasonNeural",
    "en-US-JennyMultilingualNeural",
    "en-US-JennyMultilingualV2Neural",
    "en-US-JennyNeural",
    "en-US-MichelleNeural",
    "en-US-MonicaNeural",
    "en-US-NancyNeural",
    "en-US-RogerNeural",
    "en-US-RyanMultilingualNeural",
    "en-US-SaraNeural",
    "en-US-SteffanNeural",
    "en-US-TonyNeural",
  ],
  "es-ES": [
    "es-ES-AbrilNeural",
    "es-ES-AlvaroNeural",
    "es-ES-ArnauNeural",
    "es-ES-DarioNeural",
    "es-ES-EliasNeural",
    "es-ES-ElviraNeural",
    "es-ES-EstrellaNeural",
    "es-ES-IreneNeural",
    "es-ES-LaiaNeural",
    "es-ES-LiaNeural",
    "es-ES-NilNeural",
    "es-ES-SaulNeural",
    "es-ES-TeoNeural",
    "es-ES-TrianaNeural",
    "es-ES-VeraNeural",
  ],
  "fr-FR": [
    "fr-FR-AlainNeural",
    "fr-FR-BrigitteNeural",
    "fr-FR-CelesteNeural",
    "fr-FR-ClaudeNeural",
    "fr-FR-CoralieNeural",
    "fr-FR-DeniseNeural",
    "fr-FR-EloiseNeural",
    "fr-FR-HenriNeural",
    "fr-FR-JacquelineNeural",
    "fr-FR-JeromeNeural",
    "fr-FR-JosephineNeural",
    "fr-FR-MauriceNeural",
    "fr-FR-YvesNeural",
    "fr-FR-YvetteNeural",
  ],
  "ja-JP": [
    "ja-JP-AoiNeural",
    "ja-JP-DaichiNeural",
    "ja-JP-KeitaNeural",
    "ja-JP-MayuNeural",
    "ja-JP-NanamiNeural",
    "ja-JP-NaokiNeural",
    "ja-JP-ShioriNeural",
  ],
  "ko-KR": [
    "ko-KR-BongJinNeural",
    "ko-KR-GookMinNeural",
    "ko-KR-InJoonNeural",
    "ko-KR-JiMinNeural",
    "ko-KR-SeoHyeonNeural",
    "ko-KR-SoonBokNeural",
    "ko-KR-SunHiNeural",
    "ko-KR-YuJinNeural",
  ],
  "pt-BR": [
    "pt-BR-AntonioNeural",
    "pt-BR-BrendaNeural",
    "pt-BR-DonatoNeural",
    "pt-BR-ElzaNeural",
    "pt-BR-FabioNeural",
    "pt-BR-FranciscaNeural",
    "pt-BR-GiovannaNeural",
    "pt-BR-HumbertoNeural",
    "pt-BR-JulioNeural",
    "pt-BR-LeilaNeural",
    "pt-BR-LeticiaNeural",
    "pt-BR-ManuelaNeural",
    "pt-BR-NicolauNeural",
    "pt-BR-ValerioNeural",
    "pt-BR-YaraNeural",
  ],
  "ru-RU": ["ru-RU-DariyaNeural", "ru-RU-DmitryNeural", "ru-RU-SvetlanaNeural"],
  "zh-CN": [
    "zh-CN-XiaochenNeural",
    "zh-CN-XiaohanNeural",
    "zh-CN-XiaomengNeural",
    "zh-CN-XiaomoNeural",
    "zh-CN-XiaoqiuNeural",
    "zh-CN-XiaorouNeural",
    "zh-CN-XiaoruiNeural",
    "zh-CN-XiaoshuangNeural",
    "zh-CN-XiaoxiaoNeural",
    "zh-CN-XiaoxuanNeural",
    "zh-CN-XiaoyanNeural",
    "zh-CN-XiaoyiNeural",
    "zh-CN-XiaoyouNeural",
    "zh-CN-XiaozhenNeural",
    "zh-CN-YunfengNeural",
    "zh-CN-YunhaoNeural",
    "zh-CN-YunjianNeural",
    "zh-CN-YunjieNeural",
    "zh-CN-YunxiNeural",
    "zh-CN-YunxiaNeural",
    "zh-CN-YunyangNeural",
    "zh-CN-YunyeNeural",
    "zh-CN-YunzeNeural",
    "wuu-CN-XiaotongNeural",
    "wuu-CN-YunzheNeural",
    "yue-CN-XiaoMinNeural",
    "yue-CN-YunSongNeural",
    "zh-CN-guangxi-YunqiNeural",
    "zh-CN-henan-YundengNeural",
    "zh-CN-liaoning-XiaobeiNeural",
    "zh-CN-liaoning-YunbiaoNeural",
    "zh-CN-shaanxi-XiaoniNeural",
    "zh-CN-shandong-YunxiangNeural",
    "zh-CN-sichuan-YunxiNeural",
  ],

  "zh-TW": [
    "zh-TW-HsiaoChenNeural",
    "zh-TW-YunJheNeural",
    "zh-TW-HsiaoYuNeural",
  ],
};

export default edgeVoiceList;
