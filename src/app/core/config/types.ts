import {
  Ability as DKFrostAbility,
  Talent as DKFrostTalent,
  Conduit as DKFrostConduit,
} from 'src/app/core/config/classes/deathKnight/frost/types'
import { Covenant, Legendary } from 'src/app/core/config/classes/types'
import { Generic } from 'src/utils/types'

export enum Expansion {
  Vanilla = 'van',
  BurningCrusade = 'tbc',
  WrathOfTheLichKing = 'wlk',
  Cataclysm = 'cat',
  MistOfPandaria = 'mop',
  WarlordsOfDraenor = 'wod',
  Legion = 'leg',
  BattleForAzeroth = 'bfa',
  Shadowlands = 'sha',
}

export enum Race {
  BloodElf = 'blood-elf',
  DarkIronDwarf = 'dark-iron-dwarf',
  Draenei = 'draenei',
  Dwarf = 'dwarf',
  Gnome = 'gnome',
  Goblin = 'golbin',
  HighMountainTauren = 'highmountain-tauren',
  Human = 'human',
  KulTiran = 'kul-tiran',
  LightforgedDraenei = 'lightforged-draenei',
  MagharOrc = 'maghar-orc',
  Mechagnome = 'mechagnome',
  Nightborne = 'nightborne',
  NightElf = 'night-elf',
  Orc = 'orc',
  Pandaren = 'pandaren',
  Tauren = 'tauren',
  Troll = 'troll',
  Undead = 'undead',
  VoidElf = 'void-elf',
  Vulpera = 'vulpera',
  Worgen = 'worgen',
  ZandalariTroll = 'zandalari-troll',
}

export enum SecondaryStat {
  Critic = 'critic',
  Haste = 'haste',
  Mastery = 'mastery',
  Versatility = 'versatility',
}

export enum Weapon {
  Bow = 'bow',
  DualWield = 'dual-wield',
  Mace = 'mace',
  Sword = 'sword',
  TwoHanded = 'two-handed',
}

export const DEFAULT_SPELL: Spell = {
  title: '',
  type: '',
  type2: '',
  image: '',
  cost: '',
  cast: '',
  yards: '',
  rlevel: '',
  rclass: '',
  cooldown: '',
  charges: '',
  description: '',
  id: '',
  extraInfo: {
    title: null,
    image: null,
    description: '',
  },
}

export type SpellName = Covenant | Legendary | DKFrostAbility | DKFrostTalent | DKFrostConduit

export type SpellsContextProps = {
  spells: Generic<SpellName, Spell> | null

  fetchSpells: () => void
}

export type BackendSpellExtraInfo = {
  image?: string
  title?: string
  description: string
}

export type SpellExtraInfo = {
  image: string | null
  title: string | null
  description: string
}

export type BackendSpell = {
  id: string
  title: string
  image: string
  type?: string
  type2?: string
  cost?: string
  cast?: string
  yards?: string
  charges?: string
  cooldown?: string
  rclass?: string
  rlevel?: string
  description: string
  extraInfo?: BackendSpellExtraInfo
}

export type Spell = {
  id: string
  title: string
  image: string
  type: string | null
  type2: string | null
  cost: string | null
  cast: string | null
  yards: string | null
  charges: string | null
  cooldown: string | null
  rclass: string | null
  rlevel: string | null
  description: string
  extraInfo: SpellExtraInfo | null
}
