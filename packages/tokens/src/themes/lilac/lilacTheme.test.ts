import { lilacTheme } from '../../global/brandColors';
import { lilacDarkTheme } from './darkTheme';
import { lilacLightTheme } from './lightTheme';

describe('lilac themes', () => {
  it('maps the brand ramp into light and dark themes', () => {
    expect(lilacLightTheme.colorBrandBackground).toBe(lilacTheme[80]);
    expect(lilacLightTheme.colorBrandForeground1).toBe(lilacTheme[80]);
    expect(lilacDarkTheme.colorBrandBackground).toBe(lilacTheme[70]);
    expect(lilacDarkTheme.colorBrandForeground1).toBe(lilacTheme[100]);
  });
});
