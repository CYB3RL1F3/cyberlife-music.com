import type { Struct } from 'superstruct';
import { is, define } from 'superstruct';
import { getSanitizedHtml } from './html';

export const rule = <T>(
  type: string,
  struct: Struct<T>,
  message: string,
): Struct<T, any> =>
  define(type, (value) => {
    if (typeof value === 'string' && hasXss(value))
      return 'No XSS injection allowed!!';
    return is(value, struct) ? true : message;
  });

export const hasXss = (value: string) =>
  value !== getSanitizedHtml(value, true);

export const hasInsults = (value: string) =>
  /(.*)(f[i]+ls de p[u, \*]+te|n[i, \*]+qu[e, é]+[r\s, \s]+t[a, on]+ [m, p]+[è, e, \*]+[re]+|c[o, \*]+nn[a, \*]+[r]+[d]+|e[m]+[e]+[r]+[d]+e|pet[i]+te m[e, è, é, \*]+rde|gr[o]+sse m[e, é, è, \*]+[r]+[d]+[e]+|\schi[a]+sse\s|\sf[u]+ck yo|[\s]h[i, \*]+jo de p[u]+t[a]+|\ss[a]+l[o]+[p]+e|\sp[u, \*]+te|enc[u, \*]+l|[\s, em]+m[e, \*]+[r, \*]+[d, \*]+[e]+\s|\ss[a]+l[a]+[u]+d\s|m[e]+rd[a]+sse|t[a]+p[e]+[t]+e|t[a]+fi[o]+[l]+e|\sd[u]+[m]+[b]+|st[u]+p[i]+d|cr[é, e]+t[i]+n|l[o]+ser|b[a]+bt[o]+u|\sn[é, e]+gro|\sj[e]+rk\s|\sc[a, \*]+[z, \*]+[o, \*]+\s|enf[a]+nt de p[u]+tain|nig[g]+a|\sc[u]+nt\s|\sdumbass\s|\ssc[u]+[m]+\s|\sp[u, \*]+ssy\s|\sf[a]+g\s|[\s]w[a]+nk[e]+r|b[o+]ugn[o]+ule|d[i]+ckh[e, \*]+[a, \*]+d|\spr[i, \*]+ck|b[a, \*, â]+t[a, \*]+rd|\sPD\s|e[m]+[e, \*]rde)/gim.test(
    value,
  );

export const isValidEmail = (value: string) =>
  /^[\w-+\.]+@([\w-]+\.)+[\w-]{2,6}$/gim.test(value);

export const isForbiddenEmail = (value: string) =>
  /(.*)(spam|0815.ru0clickemail.com|0-mail.com|0wnd.net|0wnd.org|10minutemail.com|20minutemail.com|2prong.com|3d-painting.com|4warding.com|4warding.net|4warding.org|9ox.net|a-bc.net|ag.us.to|amilegit.com|anonbox.net|anonymbox.com|antichef.com|antichef.net|antispam.de|baxomale.ht.cx|beefmilk.com|binkmail.com|bio-muesli.net|bobmail.info|bodhi.lawlita.com|bofthew.com|brefmail.com|bsnow.net|bugmenot.com|bumpymail.com|casualdx.com|chogmail.com|cool.fr.nf|correo.blogos.net|cosmorph.com|courriel.fr.nf|courrieltemporaire.com|curryworld.de|cust.in|dacoolest.com|dandikmail.com|deadaddress.com|despam.it|despam.it|devnullmail.com|dfgh.net|digitalsanctuary.com|discardmail.com|discardmail.de|disposableaddress.com|disposeamail.com|disposemail.com|dispostable.com|dm.w3internet.co.ukexample.com|dodgeit.com|dodgit.com|dodgit.org|dontreg.com|dontsendmespam.de|dump-email.info|dumpyemail.com|e4ward.com|email60.com|emailias.com|emailias.com|emailinfive.com|emailmiser.com|emailtemporario.com.br|emailwarden.com|enterto.com|ephemail.net|explodemail.com|fakeinbox.com|fakeinformation.com|fansworldwide.de|fastacura.com|filzmail.com|fixmail.tk|fizmail.com|frapmail.com|garliclife.com|gelitik.in|get1mail.com|getonemail.com|getonemail.net|girlsundertheinfluence.com|gishpuppy.com|goemailgo.com|great-host.in|greensloth.com|greensloth.com|gsrv.co.uk|guerillamail.biz|guerillamail.com|guerillamail.net|guerillamail.org|guerrillamail.biz|guerrillamail.com|guerrillamail.de|guerrillamail.net|guerrillamail.org|guerrillamailblock.com|haltospam.com|hidzz.com|hotpop.com|ieatspam.eu|ieatspam.info|ihateyoualot.info|imails.info|inboxclean.com|inboxclean.org|incognitomail.com|incognitomail.net|ipoo.org|irish2me.com|jetable.com|jetable.fr.nf|jetable.net|jetable.org|jnxjn.com|junk1e.com|kasmail.com|kaspop.com|klzlk.com|kulturbetrieb.info|kurzepost.de|kurzepost.de|lifebyfood.com|link2mail.net|litedrop.com|lookugly.com|lopl.co.cc|lr78.com|maboard.com|mail.by|mail.mezimages.net|mail4trash.com|mailbidon.com|mailcatch.com|maileater.com|mailexpire.com|mailin8r.com|mailinator.com|mailinator.net|mailinator2.com|mailincubator.com|mailme.lv|mailmetrash.com|mailmoat.com|mailnator.com|mailnull.com|mailzilla.org|mbx.cc|mega.zik.dj|meltmail.com|mierdamail.com|mintemail.com|mjukglass.nu|mobi.web.id|moburl.com|moncourrier.fr.nf|monemail.fr.nf|monmail.fr.nf|mt2009.com|mx0.wwwnew.eu|mycleaninbox.net|myspamless.com|mytempemail.com|mytrashmail.com|netmails.net|neverbox.com|no-spam.ws|nobulk.com|noclickemail.com|nogmailspam.info|nomail.xl.cx|nomail2me.com|nospam.ze.tc|nospam4.us|nospamfor.us|nowmymail.com|objectmail.com|obobbo.com|odaymail.com|onewaymail.com|ordinaryamerican.net|owlpic.com|pookmail.com|privymail.de|proxymail.eu|punkass.com|putthisinyourspamdatabase.com|quickinbox.com|rcpt.at|recode.me|recursor.net|regbypass.comsafe-mail.net|safetymail.info|sandelf.de|saynotospams.com|selfdestructingmail.com|sendspamhere.com|sharklasers.com|shieldedmail.com|shiftmail.com|skeefmail.com|slopsbox.com|slushmail.com|smaakt.naar.gravel|smellfear.com|snakemail.com|sneakemail.com|sofort-mail.de|sogetthis.com|soodonims.com|spam.la|spamavert.com|spambob.net|spambob.org|spambog.com|spambog.de|spambog.ru|spambox.info|spambox.us|spamcannon.com|spamcannon.net|spamcero.com|spamcorptastic.com|spamcowboy.com|spamcowboy.net|spamcowboy.org|spamday.com|spamex.com|spamfree.eu|spamfree24.com|spamfree24.de|spamfree24.eu|spamfree24.info|spamfree24.net|spamfree24.org|spamgourmet.com|spamgourmet.net|spamgourmet.org|spamherelots.com|spamhereplease.com|spamhole.com|spamify.com|spaminator.de|spamkill.info|spaml.com|spaml.de|spammotel.com|spamobox.com|spamspot.com|spamthis.co.uk|spamthisplease.com|speed.1s.fr|suremail.info|tempalias.com|tempe-mail.com|tempemail.biz|tempemail.com|tempemail.net|tempinbox.co.uk|tempinbox.com|tempomail.fr|temporaryemail.net|temporaryinbox.com|tempymail.com|thankyou2010.com|thisisnotmyrealemail.com|throwawayemailaddress.com|tilien.com|tmailinator.com|tradermail.info|trash-amil.com|trash-mail.at|trash-mail.com|trash-mail.de|trash2009.com|trashmail.at|trashmail.com|trashmail.me|trashmail.net|trashmailer.com|trashymail.com|trashymail.net|trillianpro.com|tyldd.com|tyldd.com|uggsrock.com|wegwerfmail.de|wegwerfmail.net|wegwerfmail.org|wh4f.org|whyspam.me|willselfdestruct.com|winemaven.info|wronghead.com|wuzupmail.net|xoxy.net|yogamaven.com|yopmail.com|yopmail.fr|yopmail.net|yuurok.com|zippymail.info|zoemail.com)/gi.test(
    value,
  );

export const hasInvalidContent = (value: string): boolean => {
  const text = value.trim();
  if (text.length < 3) return true;

  // If long but no whitespace, it's almost certainly garbage (you already had this)
  if (!/\s/.test(text) && text.length > 15) return true;

  const WHITELIST = new Set([
    // keep yours; I truncated here for readability
    'ok',
    'okay',
    'oui',
    'non',
    'ye',
    'yes',
    'no',
    'yo',
    'hey',
    'hi',
    'cr',
    'hello',
    'lol',
    'mdr',
    'ptdr',
    'xd',
    'i',
    'u',
    'y',
    'e',
    'a',
    'ha',
    'ah',
    'hah',
    'ho',
    'he',
    'she',
    'it',
    'we',
    'they',
    'im',
    "i'm",
    "you're",
    "he'",
    "i'",
    "c'",
    "s'",
    "l'",
    'dm',
    'rm',
    'fun',
    'luv',
    'jus',
    'wan',
    'wa',
    'w',
    'wo',
    'wu',
    'xx',
    'xoxo',
    'xo',
    'plz',
    'pls',
    'up',
    'or',
    'ni',
    'car',
    'buy',
    'can',
    'ban',
    'czn',
    'bzn',
    'biz',
    'und',
    'ja',
    'eo',
    'ik',
    'is',
    'tru',
    'svp',
    'stp',
    'dsl',
    'pck',
    'pk',
    'pq',
    'jsp',
    'tkt',
    'thx',
    'ty',
    'merci',
    'and',
    'the',
    'a',
    'o',
    'an',
    'as',
    'at',
    'and',
    'al',
    'au',
    'ae',
    'ei',
    'usa',
    'us',
    'ne',
    'je',
    'fui',
    'fus',
    'lu',
    'cru',
    'su',
    'es',
    'is',
    'it',
    'en',
    'na',
    'too',
    'wu',
    'ya',
    'to',
    'of',
    'in',
    'for',
    'vs',
    'etc',
    'mais',
    'de',
    'le',
    'la',
    'les',
    'des',
    'je',
    'tu',
    'il',
    'on',
    'ep',
    'lp',
    'mix',
    'dj',
    'db',
    'dnb',
    'ft',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
    'tb',
    'kb',
    'mb',
    'gb',
    'ar',
    'pr',
    'png',
    'jpg',
    'jpeg',
    'gif',
    'pdf',
    'doc',
    'docx',
    'txt',
    'rtf',
    'mp3',
    'wav',
    'flac',
    'aac',
    'ogg',
    'wma',
    'mov',
    'mp4',
    'avi',
    'mkv',
    'zip',
    'rar',
    '7z',
    'exe',
    'dmg',
    'iso',
    'html',
    'css',
    'js',
    'ts',
    'json',
    'xml',
    'csv',
    'yml',
    'yaml',
    'sh',
    'ssh',
    'en',
    'y',
    'un',
    'une',
    'one',
    'two',
    'thr',
    'for',
    'fiv',
    'six',
    'sev',
    'eig',
    'nin',
    'ten',
    'twl',
    'twn',
    'bcd',
    'cod',
    'dev',
    'ops',
    'js',
    'ts',
    'api',
    'mp',
    'dm',
    'ui',
    'ux',
    'cpu',
    'gpu',
    'ram',
    'dns',
    'ip',
    'ssh',
    'http',
    'https',
    'ssl',
    'tls',
    'uuid',
    'jwt',
    'oauth',
    'npm',
    'pnpm',
    'yarn',
    'git',
    'ci',
    'cd',
    'std',
    'lmt',
    'rus',
    'rue',
    'ru',
    'ra',
    'rat',
    'tri',
    'tro',
    'tru',
    'tre',
    'try',
    'cat',
    'bat',
    'dat',
    'ama',
    'uwu',
    'owo',
    'tm',
    'cm',
    'mm',
    'dm',
    'hm',
    'km',
    'hmr',
    'spe',
    'ux',
    'ui',
    'ad',
    'ads',
    'adw',
    'seo',
    'sem',
    'com',
    'net',
    'org',
    'io',
    'fls',
    'flo',
    'flu',
    'der',
    'ter',
    'tv',
    'dl',
    'sql',
    'k8s',
    'a11y',
    'all',
    'mou',
    'mûr',
    'mur',
    'mer',
    'mas',
    're',
    'min',
    'sec',
    'hr',
    'wk',
    'mo',
    'yr',
    'me',
    'te',
    'se',
    'ma',
    'ta',
    'sa',
    'di',
    'do',
    're',
    'fa',
    'sol',
    'la',
    'si',
    'ut',
    'ti',
    'io',
    'ai',
    'vr',
    'ar',
    'mr',
    'ms',
    'jr',
    'sr',
    'dr',
    'pro',
    'inc',
    'ltd',
    'llc',
    'btw',
    'fyi',
    'idk',
    'imho',
    'brb',
    'afk',
    'tba',
    'tbd',
    'ago',
    'diy',
    'wtf',
    'bff',
    'gbh',
    'imo',
    'irl',
    'jk',
    'lmk',
    'bro',
    'bs',
    'sex',
    'krr',
    'grr',
    'hmm',
    'mmh',
    'ugh',
    'eek',
    'tho',
    'thou',
    'til',
    'wth',
    'w/o',
    'b4',
    'w/',
    'w8',
    'nm',
    'pa',
    'pc',
    'pd',
    'pm',
    'po',
    'pt',
    'pts',
    'qt',
    'rp',
    'sl',
    'tc',
    'tl',
    'ty',
  ]);

  const normalizeToken = (t: string) => t.toLowerCase().replace(/[“”’]/g, "'");

  const rawTokens = text.split(/\s+/).filter(Boolean);
  const tokens = rawTokens.map(normalizeToken).filter(Boolean);

  // If everything is super short => invalid
  if (tokens.length > 0 && tokens.every((t) => t.length < 3)) return true;

  // ---------- Character-level "gibberish" signals ----------
  let score = 0;

  // Long repeated char streak (xxxxxxxxxx)
  if (/(.)\1{6,}/i.test(text)) score += 3;

  // Low diversity overall
  const chars = text.replace(/\s/g, '').toLowerCase();
  const uniqueChars = new Set(chars);
  if (chars.length >= 12 && uniqueChars.size / chars.length < 0.22) score += 3;

  // Very long consonant or vowels run anywhere
  if (/[bcdfghjklmnpqrstvwxz]{7,}/i.test(text)) score += 3;
  if (/[aeiouyàâäéèêëïîôùûüÿæœ]{7,}/i.test(text)) score += 3;

  // Weird digit-in-the-middle token (hel3lo)
  if (
    tokens.some((t) =>
      /^[a-zàâäéèêëïîôùûüÿæœ]+\d+[a-zàâäéèêëïîôùûüÿæœ]+$/i.test(t),
    )
  ) {
    score += 4;
  }

  // Special chars density
  const letters = chars.match(/[a-zàâäéèêëïîôùûüÿæœ]/gi) || [];
  const specialChars = text.match(/[^a-z0-9àâäéèêëïîôùûüÿæœ\s\r'-]/gi) || [];
  if (letters.length === 0) return true;
  if (letters.length > 0 && specialChars.length / letters.length > 0.25)
    score += 2;

  // ---------- Token-level "message quality" signals ----------

  // 1) Short token spam
  const short1 = tokens.filter((t) => t.length === 1).length;
  const short2 = tokens.filter((t) => t.length === 2).length;
  const shortRatio = tokens.length ? (short1 + short2) / tokens.length : 1;

  // If a message is mostly 1–2 char tokens, it’s almost always junk
  if (tokens.length >= 6 && shortRatio >= 0.75) score += 5;
  else if (tokens.length >= 8 && shortRatio >= 0.6) score += 3;

  // 2) "Wordlike" tokens (no dictionary needed)
  const isWhitelisted = (t: string) => WHITELIST.has(t.toLocaleLowerCase());
  const hasVowel = (t: string) => /[aeiouyàâäéèêëïîôùûüÿæœ]/i.test(t);

  const isWordLike = (t: string) => {
    if (isWhitelisted(t)) return true;
    if (t.length < 3) return false;

    // must contain at least one vowel for Latin-ish words
    if (!hasVowel(t)) return false;

    // avoid insane consonant clusters inside the token
    if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(t)) return false;

    // avoid tokens that are basically alnum soup
    const digits = t.match(/\d/g)?.length ?? 0;
    if (digits > 0 && digits / t.length > 0.34) return false;

    // too many repeated chars inside the token
    if (/(.)\1{3,}/i.test(t)) return false;

    return true;
  };

  const whitelistedCount = tokens.filter(isWhitelisted).length;
  const wordLikeCount = tokens.filter(isWordLike).length;
  const countShortWords = tokens.filter((t) => t.length < 4).length;

  // 3) A “real message” should not be rescued by one single word
  // Require at least 2 wordlike tokens for longer messages,
  // unless it’s short and mostly whitelist (like "ok merci")
  const isMostlyWhitelist =
    tokens.length >= 2 && whitelistedCount / countShortWords >= 0.7;

  const balanceShortWords = countShortWords / tokens.length;

  if (!isMostlyWhitelist && balanceShortWords > 0.5) {
    score += 4;
  }

  if (tokens.length >= 6 && wordLikeCount <= 1) score += 5;
  else if (tokens.length >= 4 && wordLikeCount === 0) score += 4;

  // 4) Penalize "token soup": too many tiny/meaningless tokens + only 1 real word
  // Example: "a e 3 d 4 dd 9 re fullword"
  const meaningfulRatio = tokens.length ? wordLikeCount / tokens.length : 0;
  if (tokens.length >= 7 && meaningfulRatio < 0.25) score += 4;
  else if (tokens.length >= 10 && meaningfulRatio < 0.33) score += 3;

  // 5) Single digits sprinkled everywhere (3 4 9) are usually noise
  // But allow normal numbers like "3 pigs are here" (one number + real words)
  const singleDigitTokens = tokens.filter((t) => /^\d$/.test(t)).length;
  if (singleDigitTokens >= 3 && wordLikeCount <= 2) score += 3;

  // 6) If message is quite long, require *some* quality
  if (text.length >= 20 && wordLikeCount <= 1) score += 3;

  return score >= 6;
};
