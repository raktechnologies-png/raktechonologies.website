import { Column, Text } from "@react-email/components";
import { colors, font, radius } from "../theme";

interface Props {
  label:  string;
  value:  string | number;
  unit?:  string;
  trend?: "up" | "down" | "neutral";
  accent?: string;
}

export default function MetricCard({ label, value, unit, trend, accent = colors.primary }: Props) {
  const trendColor = trend === "up" ? colors.success : trend === "down" ? colors.danger : colors.muted2;
  const trendSymbol = trend === "up" ? "↑" : trend === "down" ? "↓" : "";

  return (
    <Column style={{
      padding:         "18px 16px",
      backgroundColor: colors.bg,
      borderRight:     `1px solid ${colors.border}`,
      textAlign:       "center",
      verticalAlign:   "top",
    }}>
      {/* Accent top bar */}
      <div style={{
        width:        "32px",
        height:       "3px",
        background:   accent,
        borderRadius: radius.full,
        margin:       "0 auto 12px",
      }} />

      {/* Value */}
      <Text style={{
        fontSize:      font.size["2xl"],
        fontWeight:    font.weight.extrabold,
        lineHeight:    font.leading.tight,
        letterSpacing: "-0.03em",
        color:         accent,
        margin:        "0 0 4px",
      }}>
        {value}{unit && <span style={{ fontSize: font.size.sm, fontWeight: font.weight.semibold }}>{unit}</span>}
        {trendSymbol && (
          <span style={{ fontSize: font.size.sm, color: trendColor, marginLeft: "4px" }}>{trendSymbol}</span>
        )}
      </Text>

      {/* Label */}
      <Text style={{
        fontSize:      font.size.xs,
        fontWeight:    font.weight.bold,
        color:         colors.muted2,
        textTransform: "uppercase",
        letterSpacing: "0.09em",
        margin:        "0",
      }}>
        {label}
      </Text>
    </Column>
  );
}
