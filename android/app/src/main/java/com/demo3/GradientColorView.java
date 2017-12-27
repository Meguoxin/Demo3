package com.demo3;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.GradientDrawable.Orientation;
import android.view.View;
/**
 * Created by wordguo on 2017/12/24.
 */

public class GradientColorView extends View{
    private GradientDrawable mDrawable;

    private int mStartColor;
    private int mEndColor;

    public GradientColorView(Context context) {
        super(context);
        mDrawable = new GradientDrawable();
        mDrawable.setOrientation(Orientation.LEFT_RIGHT);
    }

    public void setStartColor(int startColor) {
        this.mStartColor = startColor;
    }

    public void setEndColor(int endColor) {
        this.mEndColor = endColor;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        mDrawable.setBounds(0, 0, getWidth(), getHeight());
        mDrawable.setColors(new int[]{mStartColor, mEndColor});
        mDrawable.draw(canvas);
    }

}
