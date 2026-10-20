import { AnalyzePayload, isDirectAnalyzePayload } from '@vocably/model';
import React, { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, View, ViewStyle } from 'react-native';
import {
  IconButton,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { CustomSurface } from '../ui/CustomSurface';
import { Divider } from '../ui/Divider';
import { getHistoryItemText, History } from './useHistory';

type Props = {
  history: History;
  deleteHistoryItem: (item: AnalyzePayload) => void;
  onSelect?: (item: AnalyzePayload) => void;
  style?: StyleProp<ViewStyle>;
};

const ROW_RADIUS = 12;
const ROW_PADDING = 12;

export const LookUpHistory: FC<Props> = ({
  history,
  deleteHistoryItem,
  onSelect,
  style,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  if (history.status !== 'loaded' || history.history.length === 0) {
    return null;
  }

  return (
    <View style={style}>
      <Text
        variant="labelLarge"
        style={{
          color: theme.colors.onSurfaceVariant,
          paddingHorizontal: ROW_PADDING + 4,
          marginBottom: 8,
        }}
      >
        {t('lookUp.historyTitle')}
      </Text>
      <CustomSurface>
        {history.history.map((item, index) => {
          const text = getHistoryItemText(item);
          // Reverse look ups are made from the translation language
          const [from, to] = isDirectAnalyzePayload(item)
            ? [item.sourceLanguage, item.targetLanguage]
            : [item.targetLanguage, item.sourceLanguage];

          return (
            <Fragment key={`${from}:${to}:${text}`}>
              {index > 0 && (
                <Divider
                  style={{
                    marginLeft: ROW_PADDING,
                    marginRight: ROW_PADDING,
                  }}
                />
              )}
              <TouchableRipple
                onPress={onSelect ? () => onSelect(item) : undefined}
                disabled={!onSelect}
                borderless={true}
                accessibilityRole="button"
                accessibilityLabel={`${text}, ${from} → ${to}`}
                style={{ borderRadius: ROW_RADIUS }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                    paddingLeft: ROW_PADDING,
                    paddingVertical: 4,
                  }}
                >
                  <Text
                    variant="bodyLarge"
                    numberOfLines={1}
                    style={{ flex: 1 }}
                  >
                    {text}
                  </Text>
                  <View
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 6,
                      backgroundColor: theme.colors.surfaceVariant,
                    }}
                  >
                    <Text
                      variant="labelSmall"
                      style={{
                        color: theme.colors.onSurfaceVariant,
                        letterSpacing: 0.5,
                      }}
                    >
                      {`${from} → ${to}`.toUpperCase()}
                    </Text>
                  </View>
                  <IconButton
                    icon="close"
                    size={18}
                    iconColor={theme.colors.onSurfaceVariant}
                    accessibilityLabel={t('lookUp.removeHistoryItem')}
                    onPress={() => deleteHistoryItem(item)}
                    style={{
                      margin: 0,
                      marginLeft: -4,
                      backgroundColor: 'transparent',
                    }}
                  />
                </View>
              </TouchableRipple>
            </Fragment>
          );
        })}
      </CustomSurface>
    </View>
  );
};
