import React from 'react'
import { Text } from 'rebass'
import { ExternalLink } from '../../theme'
import { ButtonPrimary } from '../Button'
import { OutlineCard } from '../Card'
import Column, { AutoColumn } from '../Column'
import { PaddedColumn } from './styleds'
import { useDarkModeManager } from '../../state/user/hooks'

import listLight from '../../assets/images/token-list/lists-light.png'
import listDark from '../../assets/images/token-list/lists-dark.png'
import { useTranslation } from 'react-i18next'

export default function ListIntroduction({ onSelectList }: { onSelectList: () => void }) {
  const [isDark] = useDarkModeManager()
  const { t } = useTranslation()

  return (
    <Column style={{ width: '100%', flex: '1 1' }}>
      <PaddedColumn>
        <AutoColumn gap="14px">
          <img
            style={{ width: '120px', margin: '0 auto' }}
            src={isDark ? listDark : listLight}
            alt="token-list-preview"
          />
          <img
            style={{ width: '100%', borderRadius: '12px' }}
            src="https://cloudflare-ipfs.com/ipfs/QmRf1rAJcZjV3pwKTHfPdJh4RxR8yvRHkdLjZCsmp7T6hA"
            alt="token-list-preview"
          />
          <Text style={{ marginBottom: '8px', textAlign: 'center' }}>{t('Newswap now supports token lists.')} </Text>
          <ButtonPrimary onClick={onSelectList} id="list-introduction-choose-a-list">
            {t('Choose a list')}
          </ButtonPrimary>
          <OutlineCard style={{ marginBottom: '8px', padding: '1rem' }} hidden>
            <Text fontWeight={400} fontSize={14} style={{ textAlign: 'center' }}>
              Token lists are an{' '}
              <ExternalLink href="https://github.com/uniswap/token-lists">open specification</ExternalLink>. Check out{' '}
              <ExternalLink href="https://tokenlists.org">tokenlists.org</ExternalLink> to learn more.
            </Text>
          </OutlineCard>
        </AutoColumn>
      </PaddedColumn>
    </Column>
  )
}
