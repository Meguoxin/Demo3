package com.demo3;

import javax.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
/**
 * Created by wordguo on 2017/12/24.
 */

public class GradientColorViewManager extends SimpleViewManager<GradientColorView>  {

    private static final String REACT_CLASS = "RCTGradientColorView";

    @Override
    public String getName() {
        // 此处name在后面JS组件开发时会用到，需要统一命名
        return REACT_CLASS;
    }

    @Override
    protected GradientColorView createViewInstance(ThemedReactContext reactContext) {
        // GradientColorView的实例化
        return new GradientColorView(reactContext);
    }

    @ReactProp(name = "startColor", customType = "Color")
    public void setStartColor(GradientColorView view, @Nullable Integer startColor) {
        view.setStartColor(startColor);
    }

    @ReactProp(name = "endColor", customType = "Color")
    public void setEndColor(GradientColorView view, @Nullable Integer endColor) {
        view.setEndColor(endColor);
    }
}
